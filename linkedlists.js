  
class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        //head indicates the beginning of the list - it always contain the first node
        //this starts off as an empty list
        this.head = null;
    }

    //create a node item
    //point the head to the new node
    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }
    //create new node item
    //check if list is empty, then insert the new item as the only item in the list
    //start at the beginning of the list and move through the list until you reach the end
    //set the end node's next pointer to the new node
    //the new node's next pointer is null 

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    } 

    insertBefore(insertItem,value){
        //current node is the first node
        let currNode = this.head;    
        //goes through linkedlist
        while(value !== currNode.next.value){
            currNode = currNode.next;
        }
        let findValue = this.find(value);
        currNode.next = new _Node(insertItem,findValue);
    }

    insertAfter(insertItem,value){
        let findValue = this.find(value);
        let tempNext = findValue.next;
        findValue.next = new _Node(insertItem, tempNext);
    }


      insertAt(insertItem, index) {
        let currentNode = this.head;
        let count = 0;
    
        while (currentNode.next !== null) {
          count++;
          if (count === index) {
            this.insertBefore(insertItem, currentNode.value);
          }
          currentNode = currentNode.next;
        }
      }
    
    //traverse the list
    //comparing the value stored in each node with the value you are searching
    //when item is found, return the node

    find(item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }

    //find the node before the node you are removing and update its next pointer
    //to skip over the removed node
    remove(item){ 
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }

    display(linkedList){
        let currentNode = linkedList.head;
        while(currentNode !== null){
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
    size(linkedList){
        let currentNode = linkedList.head;
        let count = 0;
        while(currentNode !== null){
            count++;
            currentNode = currentNode.next;
        }
        console.log(`The size of the LinkedList is ${count}`)
        return count;    
     }

     //find the node before the item you are looking for
     findPrevious(item){
        let currNode = this.head; 
        //currNode === item is wrong bc c
        if(currNode === item){
            return null;
        }
        while(currNode.next.value !== item){
            currNode = currNode.next;
            if (currNode.next === null) {
                return null;
        }
    }
        return currNode;
        //6 -> 2 ->3 ->5 ->?
        //findprev(2) = 6
        // curNode = this.head = 6
        // item = 2
        // curNode.next.value =  this.head.next.value = 2 
        // return curNode
     }

     findLast(){
        let currNode = this.head;
        
        while(currNode.next !== null){
            currNode = currNode.next;      
        }
        return currNode;
     }
     reverse(list){
         //[1,2,3,4,5]
         //head = 1 = node
         //save = 2
         //node.next = null = previous
         //previous = 1
         //node = 2

         //node = head
         //previous = null
         // save = node.next = head.next =  [2] -> 
         // node.next = previous = 
         // [1] -> [2] -> [3]
         // node.next = previous = null
         // previous = node = head = [1]
         // node = [2]

         // node = [3]
         // node = 4, 5 , null
         //   <- [1] -> [2]
       let node = list.head;
       let previous = null;

       while(node){
           let save = node.next;
           node.next = previous;
           previous = node;
           node = save;
        }
        return previous;
    }
    thirdFromEnd(){
        [1,9,0,8,7]
       let slow = this.head;
       let fast = this.head;
       while(fast !== null){
           slow = slow.next;
           fast = fast.next.next.next;
       }
       return slow;
     }

     midList(){
        let slow = this.head;
        let fast = this.head.next.next.next;
        while(fast !== null){
            slow;
            fast;
        }
        return slow; 
        }
    }

function main(){
    const SLL = new LinkedList();
    SLL.insertFirst('Apollo');
    console.log('Apollo',SLL);
    SLL.insertLast('Boomer');
    console.log('Boomer',SLL);
    SLL.insertLast('Helo');
    console.log('Helo',SLL);
    SLL.insertLast('Husker');
    console.log('Husker',SLL);
    SLL.insertLast('Starbuck');
    console.log('Starbuck',SLL);
    SLL.insertLast('Tauhida');
    console.log('Tahida', SLL);
    SLL.remove('Husker');
    console.log('Remove Husker',SLL);
    SLL.insertBefore('Athena','Boomer');
    console.log('Insert Before', SLL);
    SLL.insertAt('Kat',3);
    console.log('Insert At', SLL);
    SLL.findPrevious('Bommer');
    console.log('Findprevious', SLL);
    SLL.findLast();
    console.log('Findlast',SLL.findLast());
    console.log('Reverse',SLL.reverse(SLL));
    console.log('FindThirdLast', SLL.thirdFromEnd(SLL));
    console.log('Midlist', SLL.midList(SLL));
    }

main();


