const enum OrderStatus { // if you use const in front of the enum , compiled js file has no additional function
  PENDING = 10, // Other follow the first one
  SHIPPED,
  DELIVERED,
  RETURNED
}

type Answer = (`Your Product is ${('Pending' | 'Shipped' | 'Delivered' | 'Returned' )}` ) | 'Try to enter right status'

function checkStatus(status:OrderStatus):Answer {
  return status === OrderStatus.PENDING ? 'Your Product is Pending' : status === OrderStatus.SHIPPED ? 'Your Product is Shipped' : status === OrderStatus.DELIVERED ? 'Your Product is Delivered' : status === OrderStatus.RETURNED ? 'Your Product is Pending' : 'Try to enter right status'   
}