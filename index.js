// Legacy Analytics Page Code - Example
// Page Name
s.pageName = 'Personal Details Page';
// Site Section
s.channel = 'National';
// Site Hierarchy
s.hier1 = 'US Economy|News|Articles';
// Content Title
s.prop3 = 'Personal Content';
// Author
s.eVar6 = 'John Doe';
// Content Type
s.eVar7 = 'Article';
// Content Topics
e.prop14 = 'Natinal Economy, Currency, Elections';

// Data Layer - Example
const dataSet = {
  page: {
    pageInfo: {
      pageName: 'Personal Details Page',
      siteSection: 'National',
      hierarchy: 'US Economy|News|Articles',
    },
    contentInfo: {
      title: 'Personal Content',
      author: 'John Doe',
      contentType: 'Article',
      topics: 'National Economy, Currency, Elections',
    },
  },
};

const mProductData = {
  pageInfo: {
    pageName: 'White Shirt',
    siteSection: 'Men',
  },
  productInfo: {
    name: 'White Shirt',
    number: 'A0123',
    price: '50',
  },
};

// Traffic Variables
// Page Names
s.pageName = 'Personal Details Page';
// Site Sections
s.channel = 'National';
// Servar Name or Site Name
s.server = 'www.example.com';
// 404 Error Page
s.pageType = 'errorPage';
// Any Purpose
// s.prop1 - s.prop75
s.prop3 = 'Personal Content';
s.prop55 = 'US';

// Conversion Variables
// Tracking Codes
s.campaign = 'Black Friday';
// Product Name, Revenue
s.products = 'shoes;swimwear';
// Unique Order ID
s.purchaseID = '12345';
// Unique Transaction ID
s.transactionID = '12345';
// Record Location at Time of Purchase\
s.state = 'California';
// Any Purpose
// s.eVar1 - s.eVar100
s.eVar6 = 'John Doe';
s.eVar7 = 'Article';
// All Conversion Events aer Captured Here
s.events = 'event1,event2';

// Events
// Record an Order
s.events = 'purchase';
// Record Checkout
s.events = 'scCheckout,event1,event2';
// Record Product View
s.events = 'prodView,event1,event2';
// Record Shopping Cart Open
s.events = 'scOpen,event1,event2';
s.events = 'scOpen, scAdd';
// Record Addition to Shoping Cart
s.events = 'scAdd,event1,event2';
// Record Removal from Shopping Cart
s.events = 'scRemove,event1,event2';
// Any Purpose (integer, decimal, currency)
// event1 - event1000
s.events = 'event1';
s.events = 'purchase, event5';
