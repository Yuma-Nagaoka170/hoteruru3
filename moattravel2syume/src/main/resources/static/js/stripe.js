const stripe = Stripe('pk_test_51QwHjEHw5OVbtJZhFjDrzQAXEntkD4AKEqDA1qvEbhwbl0ujKxaRr3XaCW94HdKvIw5JHNqLTf9nUjb1h8Srf8vn00sUMaZts8');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
  stripe.redirectToCheckout({
    sessionId: sessionId
  })
});