function Node(element) {
	this.element = element;
	this.next = null;
	this.previous = null;
}

function LinkedList() {
	this.head = new Node("head");
	this.find = find;
	this.findLast = findLast;
	this.insert = insert;
	this.remove = remove;
	this.display = display;
}

function find(item) {
	var curNode = this.head;

	while (curNode.element != item) {
		curNode = curNode.next;
	}

	return curNode;
}

function insert(newElement, item) {
	var newNode = new Node(newElement);
	var current = this.find(item);

	if (!(current.next == null)) {
		newNode.next = current.next;
		newNode.next.previous = newNode;
	}

	newNode.previous = current;
	current.next = newNode;

}

function display() {
	var curNode = this.head;

	while (!(curNode.next == null)) {
		console.log(curNode.next.element);
		curNode = curNode.next;
	}
}

function remove(item) {
	var current = this.find(item);

	if (!(current.next == null)) {
		current.previous.next = current.next;
		current.next.previous = current.previous;

		current.previous = null;
		current.next = null;		
	}
}

function findLast() {
	var current = this.head;

	while (!(current.next == null)) {
		current = current.next;
	}

	return current;
}

/*
* Test Case
*/
var cities = new LinkedList();
cities.insert('Conway', 'head');
cities.insert('Russelville', 'Conway');
cities.insert('Carlisle', 'Russelville');
cities.insert('Alma', 'Carlisle');
cities.display();
console.log();
cities.remove('Carlisle');
cities.display();
