function Node(element) {
	this.element = element;
	this.next = null;
}

function LinkedList() {
	this.head = new Node("head");
	this.find = find;
	this.findPrevious = findPrevious;
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

function findPrevious(item) {
	var curNode = this.head;

	while (!(curNode.next == null) && (curNode.next.element != item)) {
		curNode = curNode.next;
	}
	return curNode;
}

function insert(newElement, item) {
	var newNode = new Node(newElement);
	var current = this.find(item);

	newNode.next = current.next;
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
	var prev = this.findPrevious(item);

	if (!(prev.next == null)) {
		prev.next = prev.next.next;
	}
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
