var grid = document.querySelector(".container");

class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor(core) {
    this.core = new Node(core);
    let mainDiv = document.createElement("div");
    let span = document.createElement("span");
    let p = document.createElement("p");
    span.textContent = core;
    span.classList.add("span");
    span.classList.add("root-span");
    span.classList.add(`s${core}`);
    p.classList.add(`.l${core}`);
    mainDiv.appendChild(span);
    mainDiv.id = "root";
    mainDiv.classList.add("node");
    grid.appendChild(mainDiv);
  }

  insert(
    root,
    data,
    mainDiv = document.getElementById("root"),
    label = "root"
  ) {
    if (data === root.data) {
      return;
    } else if (data > root.data) {
      let parent = document.getElementById(label);
      label = label + "-right";
      if (root.right === null) {
        let nodeDiv = document.createElement("div");
        let span = document.createElement("span");
        span.textContent = data;
        span.classList.add("span");
        span.classList.add("span-animation");
        span.classList.add(`s${data}`);
        span.classList.add("SpanClasses");
        nodeDiv.id = label;
        nodeDiv.classList.add("node");
        nodeDiv.classList.add("right");
        nodeDiv.classList.add(`n${data}`);

        nodeDiv.appendChild(span);
        if (mainDiv.querySelector(".holder") === null) {
          let holderDiv = document.createElement("div");
          holderDiv.classList.add("holder");
          mainDiv.appendChild(holderDiv);
          holderDiv.style.flexDirection = "row-reverse";
          holderDiv.style.marginLeft = "unset";
          holderDiv.style.marginRight = "unset";
          holderDiv.style.paddingLeft = "unset";
          holderDiv.style.paddingRight = "unset";

          // added row-reverse to fix the ordering problem on the right
        }
        mainDiv.querySelector(".holder").appendChild(nodeDiv);
        // nodeDiv.style.top = "0px";
        nodeDiv.style.right = "unset";
        nodeDiv.style.marginLeft = "unset";
        nodeDiv.style.marginRight = "unset";
        span.style.marginLeft = "unset";
        span.style.marginRight = "unset";
        mainDiv.style.marginLeft = "unset";
        mainDiv.style.marginRight = "unset";
        nodeDiv.style.paddingLeft = "unset";
        nodeDiv.style.paddingRight = "unset";
        span.style.paddingLeft = "unset";
        span.style.paddingRight = "unset";
        mainDiv.style.paddingLeft = "unset";
        mainDiv.style.paddingRight = "unset";

        let pPos = parent.childNodes[0].getBoundingClientRect();
        let nPos = nodeDiv.getBoundingClientRect();
        let right = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "line"
        );
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", document.body.clientWidth);
        svg.setAttribute("height", document.body.clientHeight * 2);
        svg.style.position = "absolute";
        right.style.position = "absolute";
        right.setAttribute("width", "0");
        right.setAttribute("height", "0");
        right.setAttribute("x1", pPos.left + +pPos.width / 2);
        right.setAttribute("y1", pPos.top + pPos.height / 2);
        right.setAttribute("x2", nPos.left + nPos.width / 2);
        right.setAttribute("y2", nPos.top + nPos.height / 2);
        right.setAttribute("stroke", "#79f901");
        right.setAttribute("stroke-width", 4);
        right.classList.add("rightLine");
        right.classList.add("rightLine-animation");
        right.classList.add("line");
        right.id = label + "-line";
        svg.id = label + "-svg";
        right.classList.add(`l${data}`);

        svg.appendChild(right);
        document.body.appendChild(svg);
        nodeIds.push(label);
        root.right = new Node(data);
      } else {
        let mainDiv = document.getElementById(label);
        this.insert(root.right, data, mainDiv, label);
      }
    } else if (data < root.data) {
      let parent = document.getElementById(label);
      label = label + "-left";
      if (root.left === null) {
        let nodeDiv = document.createElement("div");
        let span = document.createElement("span");
        span.textContent = data;
        span.classList.add("span");
        span.classList.add("span-animation");
        span.classList.add(`s${data}`);
        span.classList.add("SpanClasses");

        nodeDiv.id = label;
        nodeDiv.classList.add("node");
        nodeDiv.classList.add("left");
        nodeDiv.classList.add(`n${data}`);
        nodeDiv.appendChild(span);
        if (mainDiv.querySelector(".holder") === null) {
          let holderDiv = document.createElement("div");
          holderDiv.classList.add("holder");
          mainDiv.appendChild(holderDiv);
          holderDiv.style.marginLeft = "unset";
          holderDiv.style.marginRight = "unset";
          holderDiv.style.paddingLeft = "unset";
          holderDiv.style.paddingRight = "unset";
        }
        mainDiv.querySelector(".holder").appendChild(nodeDiv);
        // nodeDiv.style.top = "70px";
        nodeDiv.style.right = "unset";
        nodeDiv.style.marginLeft = "unset";
        nodeDiv.style.marginRight = "unset";
        span.style.marginLeft = "unset";
        span.style.marginRight = "unset";
        mainDiv.style.marginLeft = "unset";
        mainDiv.style.marginRight = "unset";
        nodeDiv.style.paddingLeft = "unset";
        nodeDiv.style.paddingRight = "unset";
        span.style.paddingLeft = "unset";
        span.style.paddingRight = "unset";
        mainDiv.style.paddingLeft = "unset";
        mainDiv.style.paddingRight = "unset";

        let pPos = parent.childNodes[0].getBoundingClientRect();
        let nPos = nodeDiv.getBoundingClientRect();
        let left = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "line"
        );
        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", document.body.clientWidth);
        svg.setAttribute("height", document.body.clientHeight * 2);
        svg.style.position = "absolute";
        left.style.position = "absolute";
        left.setAttribute("width", "0");
        left.setAttribute("height", "0");
        left.setAttribute("x1", pPos.left + +pPos.width / 2);
        left.setAttribute("y1", pPos.top + pPos.height / 2);
        left.setAttribute("x2", nPos.left + nPos.width / 2);
        left.setAttribute("y2", nPos.top + nPos.height / 2);
        left.setAttribute("stroke", "#ff00ff");
        left.setAttribute("stroke-width", 4);
        left.classList.add("leftLine");
        left.classList.add("leftLine-animation");
        left.classList.add("line");
        left.id = label + "-line";
        svg.id = label + "-svg";
        left.classList.add(`l${data}`);
        svg.appendChild(left);
        document.body.appendChild(svg);

        nodeIds.push(label);
        root.left = new Node(data);
      } else {
        let mainDiv = document.getElementById(label);
        this.insert(root.left, data, mainDiv, label);
      }
    }
  }

  HTMLSearch(
    data,
    root = myTree.core,
    htmlRoot = document.getElementById("root"),
    label = "root",
    delay = 0,
    condition = false
  ) {
    if (condition === false) {
      if (nums.includes(data) === true) {
        condition = true;
      }
    }
    if (condition === true) {
      if (data === root.data) {
        let htmlSpan = htmlRoot.querySelector(".span");
        let htmlLine = document.getElementById(label + "-line");
        try {
          htmlLine.classList.add("line-animate");
        } catch {}
        htmlSpan.classList.add("animate");
        delay = delay + 0.5;
        htmlSpan.style.animationDelay = delay + "s";
        setTimeout(function () {
          htmlSpan.classList.remove("animate");
        }, 10500);
      } else if (data > root.data) {
        if (root.right != null) {
          label = label + "-right";
          htmlRoot = document.getElementById(label);
          let htmlLine = document.getElementById(label + "-line");
          htmlLine.classList.add("line-animate");
          delay = delay + 0.5;
          htmlLine.style.animationDelay = delay + "s";
          setTimeout(function () {
            htmlLine.classList.remove("line-animate");
          }, 10500);
          this.HTMLSearch(data, root.right, htmlRoot, label, delay);
        } else {
        }
      } else if (data < root.data) {
        if (root.left != null) {
          label = label + "-left";
          htmlRoot = document.getElementById(label);
          let htmlLine = document.getElementById(label + "-line");
          htmlLine.classList.add("line-animate");
          delay = delay + 0.5;
          htmlLine.style.animationDelay = delay + "s";
          setTimeout(function () {
            htmlLine.classList.remove("line-animate");
          }, 10500);
          this.HTMLSearch(data, root.left, htmlRoot, label, delay);
        } else {
        }
      }
    } else {
      for (let i = 0; i < nodeIds.length; i++) {
        let span = document.getElementById(nodeIds[i]).firstChild;
        let rootSpan = document.getElementById("root").firstChild;
        rootSpan.style.backgroundImage = "unset";
        rootSpan.style.backgroundColor = "#e8554e";
        span.style.backgroundImage = "unset";
        span.style.backgroundColor = "#e8554e";
        setTimeout(() => {
          span.style.backgroundImage =
            "linear-gradient(var(--degree), gold, gold)";
          rootSpan.style.backgroundImage =
            "linear-gradient(var(--degree), gold, gold)";
        }, 100);
      }
    }
  }
}

function leafNodeFinder(node) {
  currentNode = document.getElementById(node);
  if (currentNode.childNodes[1] === undefined) {
    document.body.querySelector(`.${node}`).remove();
  }
  if (currentNode.childNodes[1] != undefined) {
    currentNode.classList.add("parent");
  }
}
let phoneNums = {
  0: [21, 8, 12, 54, 81, 7, 77, 61],
  1: [71, 90, 5, 3, 45, 12, 92],
  2: [19, 29, 46, 13, 8, 7, 14],
};

let desktopNums = {
  0: [33, 45, 6, 8, 13, 2, 6, 8, 4, 6, 49, 4],
  1: [50, 1, 44, 54, 94, 25, 45, 54, 23, 15, 56],
  2: [5, 65, 9, 14, 2, 63, 2, 4, 5, 8, 2, 3],
  3: [47, 3, 1, 6, 5, 88, 46, 97, 51, 65, 63, 42, 39],
};
let nums = [];

let windowSize = window.matchMedia("(min-width: 1000px)");

let buildTree = document.getElementById("emptyTree");
buildTree.addEventListener("click", function zeroOut() {
  sessionStorage.setItem("nums", "X");
  window.location.reload();
});
if (sessionStorage.getItem("nums") === "X") {
  nums = "X";
} else {
  if (windowSize.matches) {
    nums = desktopNums[Math.floor(Math.random() * 4)];
  } else {
    nums = phoneNums[Math.floor(Math.random() * 3)];
  }
}
let nodeIds = [];
let lineIds = [];
let SpanClasses = [];
let counter = 0;
let myTree = new BST(nums[0]);

function treeBuilder(a) {
  for (let i = 0; i < 20; i++) {
    myTree.insert(myTree.core, a[i]);
  }
}

treeBuilder(nums);

if (windowSize.matches) {
  let addBtn = document.querySelector(".text-inside-add-btn2");
  addBtn.addEventListener("click", function add() {
    let n = document.getElementById("addNumber").value;
    document.getElementById("addNumber").value = "";

    let condition = false;
    n = parseInt(n);
    if (isNaN(n) === true && document.querySelector(".sX") !== null) {
      return 0;
    } else if (isNaN(n) === true && document.querySelector(".sX") === null) {
      condition = false;
    }

    if (nums.includes("X")) {
      document.getElementById("root").remove();
      myTree = new BST(n);
      nums = [];
      let span = document.querySelector(`.s${n}`);
      span.style.setProperty("--spanAnimationName", "appear");
      setTimeout(() => {
        span.style.setProperty("--spanAnimationName", "abc");
      }, 1000);
    }

    if (nums.includes(n) === false && isNaN(n) === false) {
      nums.push(n);
      condition = true;
    }

    treeBuilder(nums);
    if (condition === true) {
      let span = document.querySelector(`.s${n}`);
      let line = document.querySelector(`.l${n}`);

      span.style.setProperty("--spanAnimationName", "appear");
      setTimeout(() => {
        span.style.setProperty("--spanAnimationName", "abc");
        try {
          line.style.setProperty("--leftLineAnimationName", "abc");
          line.style.setProperty("--rightLineAnimationName", "abc");
        } catch (e) {}
      }, 1000);
    }
    if (condition === false) {
      for (let i = 0; i < nodeIds.length; i++) {
        let span = document.getElementById(nodeIds[i]).firstChild;
        let rootSpan = document.getElementById("root").firstChild;

        rootSpan.style.backgroundImage = "unset";
        rootSpan.style.backgroundColor = "#e8554e";
        span.style.backgroundImage = "unset";
        span.style.backgroundColor = "#e8554e";
        setTimeout(() => {
          span.style.backgroundImage =
            "linear-gradient(var(--degree), gold, gold)";
          rootSpan.style.backgroundImage =
            "linear-gradient(var(--degree), gold, gold)";
        }, 100);
      }
    }
  });
} else {
  let addBtn = document.querySelector(".text-inside-add-btn2-phone");
  addBtn.addEventListener("click", function add() {
    let n = document.getElementById("addNumber-phone").value;
    document.getElementById("addNumber-phone").value = "";

    let condition = false;
    n = parseInt(n);
    if (isNaN(n) === true && document.querySelector(".sX") !== null) {
      return 0;
    } else if (isNaN(n) === true && document.querySelector(".sX") === null) {
      condition = false;
    }
    if (nums.includes("X")) {
      document.getElementById("root").remove();

      myTree = new BST(n);
      nums = [];
      let span = document.querySelector(`.s${n}`);

      span.style.setProperty("--spanAnimationName", "appear");

      setTimeout(() => {
        span.style.setProperty("--spanAnimationName", "abc");
      }, 1000);
    }
    if (nums.includes(n) === false && isNaN(n) === false) {
      nums.push(n);
      condition = true;
    }

    treeBuilder(nums);
    if (n == NaN) {
      condition = false;
    }
    if (condition === true) {
      let span = document.querySelector(`.s${n}`);
      let line = document.querySelector(`.l${n}`);

      span.style.setProperty("--spanAnimationName", "appear");
      setTimeout(() => {
        span.style.setProperty("--spanAnimationName", "abc");

        try {
          line.style.setProperty("--leftLineAnimationName", "abc");
          line.style.setProperty("--rightLineAnimationName", "abc");
        } catch (e) {}
      }, 1000);
    }
    if (condition === false) {
      for (let i = 0; i < nodeIds.length; i++) {
        let span = document.getElementById(nodeIds[i]).firstChild;
        let rootSpan = document.getElementById("root").firstChild;
        rootSpan.style.backgroundImage = "unset";
        rootSpan.style.backgroundColor = "#e8554e";
        span.style.backgroundImage = "unset";
        span.style.backgroundColor = "#e8554e";
        setTimeout(() => {
          span.style.backgroundImage =
            "linear-gradient(var(--degree), gold, gold)";
          rootSpan.style.backgroundImage =
            "linear-gradient(var(--degree), gold, gold)";
        }, 100);
      }
    }
  });
}

if (windowSize.matches) {
  let searchBtn = document.querySelector(".text-inside-search-btn");
  searchBtn.addEventListener("click", function search() {
    let sn = document.getElementById("searchNumber").value;
    document.getElementById("searchNumber").value = "";
    sn = parseInt(sn);
    myTree.HTMLSearch(sn);
  });
} else {
  let searchBtn = document.querySelector(".text-inside-search-btn-phone");
  searchBtn.addEventListener("click", function search() {
    let sn = document.getElementById("searchNumber-phone").value;
    document.getElementById("searchNumber-phone").value = "";
    sn = parseInt(sn);
    myTree.HTMLSearch(sn);
  });
}

let randomSearch = document.getElementById("randomSearch");
randomSearch.addEventListener("click", function randomSearch() {
  let randomSearchNumber = nums[Math.floor(Math.random() * nums.length)];
  myTree.HTMLSearch(randomSearchNumber);
});

window.addEventListener("resize", function () {
  // this.window.location.reload(); #reload on refresh
});

window.addEventListener("load", function removeX() {
  this.sessionStorage.removeItem("nums");
});

setTimeout(function entranceAnimationRemover() {
  let rootSpan = document.querySelector(".root-span");
  // rootSpan.style.setProperty("--appear", "abc");

  for (let i = 0; i < nodeIds.length; i++) {
    let node = document.getElementById(nodeIds[i]);
    let span = node.firstChild;
    let line = document.getElementById(nodeIds[i] + "-line");
    line.style.setProperty("--rightLineAnimationName", "abc");
    span.style.setProperty("--spanAnimationName", "abc");
    line.style.setProperty("--leftLineAnimationName", "abc");
  }
  rootSpan.style.setProperty("--spanAnimationName", "abc");
}, 1000);

window.onclick = (e) => {
  let n = parseInt(e.target.innerText);
  if (isNaN(n) === false) {
    myTree.HTMLSearch(n);
  }
};

const meta = document.querySelector("meta[name=viewport]"),
  initialContent = meta && meta.getAttribute("content"),
  disabledZoom = initialContent + ",maximum-scale=1";

function restoreZoom() {
  meta.setAttribute("content", disabledZoom);
}

addEventListener("orientationchange", restoreZoom, false);
