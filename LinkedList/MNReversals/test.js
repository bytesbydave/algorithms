// const mnReversals = require('./index');

// class ListNode {
//   constructor(val, next = null) {
//     this.val = val;
//     this.next = next;
//   }
// }
// // ---- Generate our linked list ----
// function generateLinkedList(arr) {
//   const linkedList = arr.reduce((acc, val) => new ListNode(val, acc), null);
//   return linkedList;
// }

// // ---- Generate our linked list ----

// const printList = (head) => {
//   if (!head) {
//     return;
//   }

//   console.log(head.val);
//   printList(head.next);
// };

// printList(linkedList);

// describe('MN Reversals', () => {
//   it('reverses [1,2,3,4,5] with m=2, n=4 to return [1,4,3,2,5]', () => {
//     const list = [1, 2, 3, 4, 5];
//     const linkedList = generateLinkedList(list);
//     const response = mnReversals(linkedList);
//     expect(response).toEqual(null);
//   });

//   it('reverses [1,2,3,4,5] with m=1, n=5 to return [5,4,3,2,1]', () => {
//     const list = [1, 4, 3, 2, 5];
//     const linkedList = generateLinkedList(list);
//     const response = mnReversals(linkedList);
//     expect(response).toEqual(null);
//   });

//   it('reverses [1] with m=1, n=1 to return [1]', () => {
//     const list = [1];
//     const linkedList = generateLinkedList(list);
//     const response = mnReversals(linkedList);
//     expect(response).toEqual(null);
//   });

//   it('reverses null with m=0, n=0 to return null', () => {
//     const list = [];
//     const linkedList = generateLinkedList(list);
//     const response = mnReversals(linkedList);
//     expect(response).toEqual(null);
//   });
// });

const hubspot = require('@hubspot/api-client');

exports.main = (event, callback) => {
  const hubspotClient = new hubspot.Client({ accessToken: '------------' });
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

  hubspotClient.crm.contacts.searchApi
    .doSearch(publicObjectSearchRequest)
    .then((results) => {
      let contactId = results.body.results[0].id;
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

      hubspotClient.crm.contacts.basicApi.update(contactId, {
        properties: {
          total_referrals: totalReferralsUpdated,
          recent_referral_date: d,
        },
      });
    });
};



