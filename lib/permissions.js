// check that the userid specified owns the documents
ownsDocument = function(userId, doc) {
  return doc && doc.userId === userId;
}