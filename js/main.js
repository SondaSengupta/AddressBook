;(function(){
  'use strict';
  angular.module('AddressBook',[])
    .controller('AddressBookController',function(){
      var vm = this;
      vm.contact = [
      {
        name: 'Ron Swanson',
        phone: '123-456-7890',
        email: 'rswanson@park.com',
        dates: 'Wedding',
        group: 'Family',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Nick_Offerman_at_UMBC_%28cropped%29.jpg/640px-Nick_Offerman_at_UMBC_%28cropped%29.jpg'
      },
      {
        name: 'Andy Dwyer',
        phone: '123-456-7890',
        email: 'adwyer@park.com',
        dates: '',
        group: 'Coworker',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Chris_Pratt_by_Gage_Skidmore.jpg'
      },
      {
        name: 'April Ludgate',
        phone: '123-456-7890',
        email: 'aludgate@park.com',
        dates: '',
        group: 'Coworker',
        image: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Aubrey_Plaza_2012_Shankbone.JPG'
      },
    ];

    vm.newContact = _newContact();

      vm.groupOptions = {
        general: 'General',
        work: 'Work',
        family: 'Family',
        friends: 'Friends',
        enemy: 'Enemy'
      }

    vm.addNewContact = function () {
      vm.contact.push(vm.newContact);
      vm.newContact = _newContact();
    };

    vm.removeContact = function(person){
      var index = vm.contact.indexOf(person);
      vm.contact.splice(index,1);
    };

    function _newContact(){
      return {
        group: 'general'
      };
    }
  });
}());
