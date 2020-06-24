const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');


aws.config.setPromisesDependency();
aws.config.update({
    secretAccessKey: "/",
    accessKeyId: ManagedBlockchain,
    region: "ca-central-1"
});

const s3 = new aws.S3();

(async function() {
    const response = await s3.listObjectsV2({
    Bucket: "cookingtogether",
    acl: "public-read"
    }).promise();

    console.log(response);
    module.exports = response;
})

console.log("HELLO");

var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "cookingtogether",
    acl: "public-read",
    metadata: function (req, file, cb) {
      cb(null, {fieldName: "TESTING_META_DATA"});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
});

module.exports = upload;
