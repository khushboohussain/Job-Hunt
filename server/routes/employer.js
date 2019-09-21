const os = require('os');
module.exports = function(app, db) {
  app.get('/employer', authenticate, function(req,res){
    db.collection('user').where("userType", "==", "employer").get().then(function(querySnapshot) {
      let data =[];
      querySnapshot.forEach(function(doc) {
        data.push(doc.data());
      });
      res.json(data);
    });
  });
  app.get('/employer/profiledata/:id', authenticate, function(req,res){
    db.collection('employerProfile').where("userId", "==", req.params.id).get().then(function(querySnapshot) {
      let data =[];
      querySnapshot.forEach(function(doc) {
        let obj = {
          photo_url: doc.data().photo_url,
          name: doc.data().name,
          since: doc.data().since,
          teamsize: doc.data().teamsize,
          categories: doc.data().categories,
          description: doc.data().description,
          userId: doc.data().userId,
          phone_number: doc.data().phone_number,
          fullname: doc.data().fullname,
          website: doc.data().website,
          city: doc.data().city,
          country: doc.data().country,
          email: doc.data().email,
          lat: doc.data().lat,
          lon: doc.data().lon,
          address: doc.data().address,
          uid: doc.id
        };
        console.log(doc.data());
        data.push(obj);
      });
      res.json(data);
    });
  });
  app.post('/employer/profiledata', authenticate, function(req,res){
    db.collection('employerProfile').where("userId", "==", req.body.userId).get().then(function(querySnapshot) {
      if(querySnapshot.size > 0) {
        console.log('update');
        console.log(req.body);
        db.collection('employerProfile').doc(req.body.uid).update(req.body);
        res.json(req.body);
      } else {
        console.log('add');
        console.log(req.body);
        db.collection('employerProfile').add(req.body).then(data => {
          req.body.uid = data.id;
          res.json(req.body);
        });
      }
    });
  });
  app.post('/employer/add-job', authenticate, function(req,res) {
    db.collection('jobPost').add(req.body).then(data => {
      req.body.uid = data.id;
      res.json(req.body);
    });
  });

  app.get('/employer/applied-jobs/:id', authenticate, function(req,res) {
    let data =[];
    db.collection('applyJob').where("empId", "==", req.params.id).get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        data.push(doc.data());
      });
    }).then(()=> res.json(data));
  });

  app.get('/employer/applied-jobs-id/:id', authenticate, function(req,res) {
    let data =[];
    db.collection('applyJob').where("jobId", "==", req.params.id).get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        data.push(doc.data());
      });
    }).then(()=> res.json(data));
  });

  app.get('/employer/jobs/:id', authenticate, function(req,res) {
    db.collection('jobPost').where("userId", "==", req.params.id).get().then(function(querySnapshot) {
      let data =[];
      querySnapshot.forEach(function(doc) {
        let obj = {
          job_title: doc.data().job_title,
          description: doc.data().description,
          job_type: doc.data().job_type,
          categories: doc.data().categories,
          offered_sal: doc.data().offered_sal,
          career_level: doc.data().career_level,
          experience: doc.data().experience,
          gender: doc.data().gender,
          industry: doc.data().industry,
          dead_line: doc.data().dead_line,
          qualification: doc.data().qualification,
          skills: doc.data().skills,
          country: doc.data().country,
          city: doc.data().city,
          address: doc.data().address,
          lat: doc.data().lat,
          created_date: doc.data().created_date,
          lon: doc.data().lon,
          status: doc.data().status,
          userId: doc.data().userId,
          jobId: doc.data().jobId,
          uid: doc.id
        };
        data.push(obj);
      });
      res.json(data);
    });
  });
  app.get('/employer/job-single/:id', authenticate, function(req,res){
    db.collection('jobPost').doc(req.params.id).get().then(function(doc) {
      let obj = {
        job_title: doc.data().job_title,
        description: doc.data().description,
        job_type: doc.data().job_type,
        categories: doc.data().categories,
        offered_sal: doc.data().offered_sal,
        career_level: doc.data().career_level,
        experience: doc.data().experience,
        gender: doc.data().gender,
        industry: doc.data().industry,
        dead_line: doc.data().dead_line,
        qualification: doc.data().qualification,
        skills: doc.data().skills,
        country: doc.data().country,
        city: doc.data().city,
        address: doc.data().address,
        lat: doc.data().lat,
        created_date: doc.data().created_date,
        lon: doc.data().lon,
        status: doc.data().status,
        userId: doc.data().userId,
        uid: doc.id
      };
      res.json(obj);
    });
  });
  app.delete('/employer/job-single/:id', authenticate, function(req,res){
    db.collection('jobPost').doc(req.params.id).delete().then(success=> {
      console.log(success);
      res.json({success: true});
    }, err => {
      res.json({success: false});
    });
  });
}
function authenticate(req,res,next) {
  var token = req.headers['x-access-token'] || req.headers['authorization'];
  if(token) {
    next();
  } else {
    res.status(401).json({
      message: 'Unauthorized Request'
    });
  }
}
