const info = {
  name: 'wyatt',
  friend: {
    name: 'Wayne',
    girlFriend: {
      name: 'hmm',
    },
  },
}
// console.log(info.friend.girlFriend.name)

// if (info && info.friend && info.friend.girlFriend) {
//   console.log(info.friend.girlFriend.name)
// }

// ES11提供了可選鏈(Optional Chaining)
console.log(info.friend?.girlFriend?.name)
