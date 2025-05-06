import React from 'react';
import './SubscriptionPage.css';

const SubscriptionPage = () => {
  return (
    <div className="subscription-container">
      <h2>Choose a Subscription Plan</h2>
      <div className="plans">
        <div className="plan">
          <h3>Basic</h3>
          <p>$5/month</p>
          <ul>
            <li>Access to limited galleries</li>
            <li>Email support</li>
          </ul>
        </div>
        <div className="plan">
          <h3>Standard</h3>
          <p>$10/month</p>
          <ul>
            <li>Access to all galleries</li>
            <li>Email + chat support</li>
            <li>Monthly newsletter</li>
          </ul>
        </div>
        <div className="plan">
          <h3>Premium</h3>
          <p>$15/month</p>
          <ul>
            <li>All Standard features</li>
            <li>Early access to new exhibits</li>
            <li>Exclusive virtual tours</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;