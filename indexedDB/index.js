(function () {
  var db,
      dbName = 'project';

  var DBOpenRequest = window.indexedDB.open(dbName, 1)

  // 打开数据库成功
  DBOpenRequest.onsuccess = function (event) {
    db = DBOpenRequest.result;
    console.log(db)
  }

  DBOpenRequest.onerror = function (event) {
    console.log('打开数据库失败')
  }

  // 下面事情执行于：数据库首次创建版本，
  // 或者window.indexedDB.open传递的新版本（版本数值要比现在的高）
  DBOpenRequest.onupgradeneeded = function (event) {
    var db = event.target.result
    db.onerror = function () {
      console.log('打开数据库失败')
    }

    // objectStore.add()可以向数据库添加数据，objectStore.delete()可以删除数据，
    // objectStore.clear()可以清空数据库，objectStore.put()可以替换数据等
    var objectStore = db.createObjectStore(dbName, {
      keyPath: 'id',
      autoIncrement: true
    })

    objectStore.createIndex('id', 'id', {
      unique: true
    })

    objectStore.createIndex('name', 'name')
  }

  function addItem() {
    var item = {
      "name": Date.parse(new Date())
    }

    var transaction = db.transaction([dbName], "readwrite");
    var objectStore = transaction.objectStore(dbName);
    objectStore.add(item);
  }

  setTimeout(function () {
    addItem()
  }, 2000)

})()