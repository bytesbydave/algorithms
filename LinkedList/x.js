const hubspot = require('@hubspot/api-client');

exports.main = (event, callback) => {
  const hubspotClient = new hubspot.Client({
    accessToken: process.env.HAPIKEY,
  });
  //What we need here is getting the referrer assigned previously in the workflow to this contact, so the search of ID's was not about itself, so change it from referrer_id to referrer.
  //const referrer = event.inputFields['referrer_id'];
  const referrer = event.inputFields['referrer'];
  console.log('REFERRED ID: ' + referrer);

  //2) Search for the contact using the deals referrer_id and update (referrer_id)
  const filter = {
    propertyName: 'referrer_id',
    operator: 'EQ',
    value: referrer,
  };
  const filterGroup = {
    filters: [filter],
  };

  const sort = JSON.stringify({
    propertyName: 'referrer_id',
    direction: 'DESCENDING',
  });
  const properties = [
    'referrer_id',
    'total_referrals',
    'firstname',
    'lastname',
    'email',
  ];
  const limit = 100;
  const after = 0;

  const publicObjectSearchRequest = {
    filterGroups: [filterGroup],
    sorts: [sort],
    properties,
    limit,
    after,
  };

  hubspotClient.crm.contacts.searchApi
    .doSearch(publicObjectSearchRequest)
    .then((results) => {
      let contactId = results.body.results[0].id;
      let referrer_email = results.body.results[0].properties.email;
      let totalReferrals = 0;

      if (
        results.body.results[0].properties.total_referrals === null ||
        results.body.results[0].properties.total_referrals === undefined ||
        results.body.results[0].properties.total_referrals === ''
      ) {
        totalReferrals = 0;
      } else {
        totalReferrals = parseInt(
          results.body.results[0].properties.total_referrals
        );
      }

      let totalReferralsUpdated = totalReferrals + 1;

      var d = new Date();
      d.setUTCHours(0, 0, 0, 0);

      //Update Referred Contact
      hubspotClient.crm.contacts.basicApi.update(event.object.objectId, {
        properties: {
          referred_by: referrer_email,
        },
      });

      //Update Referring Contact
      hubspotClient.crm.contacts.basicApi.update(contactId, {
        properties: {
          total_referrals: totalReferralsUpdated,
          recent_referral_date: d,
        },
      });
    });
};
