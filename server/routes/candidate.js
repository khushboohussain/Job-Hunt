const jwt = require('jsonwebtoken');
module.exports = function(app, db) {
  app.get('/candidate', authenticate, function(req,res){
    db.collection('user').where("userType", "==", "candidate").get().then(function(querySnapshot) {
      let data =[];
      querySnapshot.forEach(function(doc) {
        data.push(doc.data());
      });
      res.json(data);
    });
  });

  app.get('/candidate/getAllJobs', authenticate, function(req,res){
    let data = [];
    db.collection('jobPost').get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        //console.log(querySnapshot);
        data.push(doc.data());
        console.log('Data is '+ doc.data());
      });
    }).then(()=>{
      res.json(data);
    });
  });

  app.get('/candidate/jobapplied/:id', authenticate, function(req,res){
    let data = [];
    db.collection('applyJob').where("candidateId", "==", req.params.id).get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        data.push(doc.data());
      });
    }).then(()=>{
      console.log(data);
      res.json(data);
    }, err =>{
      console.log(err);
    });
  });

  app.get('/candidate/get-job/:id', authenticate, function(req,res){
    let data = [];
    db.collection('jobPost').where("jobId", "==", req.params.id).get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        console.log(querySnapshot);
        data.push(doc.data());
        console.log('Data is '+ doc.data());
      });
    }).then(()=>{
      res.json(data[0]);
    });
  });

  app.get('/candidate/profiledata', authenticate, function(req,res) {
    db.collection('userProfile').get().then(function(querySnapshot) {
      let data =[];
      querySnapshot.forEach(function(doc) {
        data.push(doc.data());
      });
      res.json(data);
    });
  });
  app.get('/candidate/:id', authenticate, function(req,res){
    db.collection('user').where("userId", "==", req.params.id).get().then(function(querySnapshot) {
      let data = [];
      querySnapshot.forEach(function(doc) {
        data.push(doc.data());
      });
      res.json(data[0]);
    });
  });
  app.get('/loggedIn/:id', function(req, res, next) {
    db.collection('user').where("userId", "==", req.params.id).get().then(function(querySnapshot) {
      let data =[];
      querySnapshot.forEach(function(doc) {
        data.push(doc.data());
      });
      console.log(data);
      res.json(data);
    });
  });
  app.get('/candidate/profiledata/:id', authenticate, function(req,res) {
    db.collection('userProfile').where("userId", "==", req.params.id).get().then(function(querySnapshot) {
      console.log(querySnapshot);
        let data =[];
        querySnapshot.forEach(function(doc) {
          data.push(doc.data());
        });
        res.json(data[0])
    });
  });
  app.get('/candidate/candidate-skills/:id', authenticate, function(req,res){
    db.collection('candidateSkill').where("userId", "==", req.params.id).get().then(function(querySnapshot) {
      let data =[];
      querySnapshot.forEach(function(doc) {
        let obj = {
          skillname: doc.data().skillname,
          skillrate: doc.data().skillrate,
          userId: doc.data().userId,
          uid: doc.id
        };
        data.push(obj);
      });
      res.json(data);
    });
  });
  app.get('/candidate/candidate-education/:id', authenticate, function(req,res){
    db.collection('candidateEducation').where("userId", "==", req.params.id).get().then(function(querySnapshot) {
      let data =[];
      querySnapshot.forEach(function(doc) {
        let obj = {
          education: doc.data().education,
          start_year: doc.data().start_year,
          end_year: doc.data().end_year,
          institution_name: doc.data().institution_name,
          programme: doc.data().programme,
          description: doc.data().description,
          userId: doc.data().userId,
          uid: doc.id
        };
        data.push(obj);
      });
      res.json(data);
      // console.log('Candidate edu is '+ data);
    });
  });
  app.get('/candidate/candidate-workexp/:id', authenticate, function(req,res){
    db.collection('candidateWorkExp').where("userId", "==", req.params.id).get().then(function(querySnapshot) {
      let data =[];
      querySnapshot.forEach(function(doc) {
        let obj = {
          position: doc.data().position,
          company_name: doc.data().company_name,
          start_year: doc.data().start_year,
          end_year: doc.data().end_year,
          description: doc.data().description,
          userId: doc.data().userId,
          uid: doc.id
        };
        data.push(obj);
      });
      res.json(data);
    });
  });
  app.get('/candidate/candidate-awards/:id', authenticate, function(req,res){
    db.collection('candidateAwards').where("userId", "==", req.params.id).get().then(function(querySnapshot) {
      let data =[];
      querySnapshot.forEach(function(doc) {
        let obj = {
          name: doc.data().name,
          year: doc.data().year,
          description: doc.data().description,
          userId: doc.data().userId,
          uid: doc.id
        };
        data.push(obj);
      });
      res.json(data);
    });
  });
  app.post('/candidate/profiledata', authenticate, function(req,res) {
    db.collection('userProfile').where("userId", "==", req.body.userId).get().then(function(querySnapshot) {
      if(querySnapshot.size > 0) {
        querySnapshot.forEach(function(doc) {
          db.collection("userProfile").doc(doc.id).update(req.body);
        });
      } else {
        db.collection('userProfile').add(req.body);
      }
      res.json(req.body);
    });

  });
  app.post('/candidate/candidate-workexp', authenticate, function(req,res){
    if(req.body.add) {
      db.collection('candidateWorkExp').add(req.body.data).then(data => {
        req.body.data.uid = data.id;
        res.json(req.body.data);
      });
    } else {
      db.collection('candidateWorkExp').doc(req.body.data.uid).update(req.body.data);
      res.json(req.body.data);
    }
  });
  app.post('/candidate/candidate-education', authenticate, function(req,res){
    if(req.body.add) {
      db.collection('candidateEducation').add(req.body.data).then(data => {
        req.body.data.uid = data.id;
        res.json(req.body.data);
      });
    } else {
      db.collection('candidateEducation').doc(req.body.data.uid).update(req.body.data);
      res.json(req.body.data);
    }
  });
  app.post('/candidate/candidate-skills', authenticate, function(req,res){
    if(req.body.add) {
      db.collection('candidateSkill').add(req.body.data).then(data => {
        req.body.data.uid = data.id;
        res.json(req.body.data);
      });
    } else {
      db.collection('candidateSkill').doc(req.body.data.uid).update(req.body.data);
      res.json(req.body.data);
    }
  });
  app.post('/candidate/candidate-awards', authenticate, function(req,res){
    if(req.body.add) {
      db.collection('candidateAwards').add(req.body.data).then(data => {
        req.body.data.uid = data.id;
        res.json(req.body.data);
      });
    } else {
      db.collection('candidateAwards').doc(req.body.data.uid).update(req.body.data);
      res.json(req.body.data);
    }
  });
  app.delete('/candidate/candidate-education/:id', authenticate, function(req,res){
    db.collection('candidateEducation').doc(req.params.id).delete().then(success=> {
      //console.log(success);
      res.json({success: true});
    }, err => {
      res.json({success: false});
    });
  });
  app.delete('/candidate/candidate-workexp/:id', authenticate, function(req,res){
    db.collection('candidateWorkExp').doc(req.params.id).delete().then(success=> {
      //console.log(success);
      res.json({success: true});
    }, err => {
      res.json({success: false});
    });
  });
  app.delete('/candidate/candidate-skill/:id', authenticate, function(req,res){
    db.collection('candidateSkill').doc(req.params.id).delete().then(success=> {
      console.log(success);
      res.json({success: true});
    }, err => {
      res.json({success: false});
    });
  });
  app.delete('/candidate/candidate-award/:id', authenticate, function(req,res){
    db.collection('candidateAwards').doc(req.params.id).delete().then(success=> {
      console.log(success);
      res.json({success: true});
    }, err => {
      res.json({success: false});
    });
  });
  app.post('/candidate/applyJob', authenticate, function(req,res){
    console.log(req.body);
    db.collection('applyJob').where('jobId', '==', req.body.jobId).where('candidateId', '==', req.body.candidateId).get().then(function(querySnapshot) {
      if(querySnapshot.size > 0) {
        res.json({message: 'Already Applied for a job', status: false});
      } else {
        db.collection('applyJob').add(req.body).then(data => {
          console.log('Job Applied');
          res.json({message:'You have Applied for the job, you can check at applied jobs tab', success: true});
        });
      }
    });
  });
  app.post('/candidate/shortlist', authenticate, function(req,res){
    db.collection('shortlistedJob').where('jobId', '==', req.body.jobId).where('candidateId', '==', req.body.candidateId).get().then(function(querySnapshot) {
      if(querySnapshot.size > 0) {
        res.json({message: 'Already shortlisted the job', status: false});
      } else {
        db.collection('shortlistedJob').add(req.body).then(data => {
          res.json({message:'You have shortlisted the job, you can check at shortlisted jobs tab', success: true});
        });
      }
    });
  });
  app.get('/candidate/shortlist/:id', authenticate, function(req,res){
    db.collection('shortlistedJob').where('candidateId', '==', req.params.id).get().then(function(querySnapshot) {
      let data =[];
      querySnapshot.forEach(function(doc) {
        let obj = {
          job_title: doc.data().job_title,
          job_type: doc.data().job_type,
          address: doc.data().address,
          applied_date: doc.data().applied_date,
          jobId: doc.data().jobId,
          empId: doc.data().empId,
          candidateId: doc.data().candidateId
        };
        data.push(obj);
      });
      res.json(data);
    });
  });
  app.get('/candidate/applyjob/:id', authenticate, function(req,res){
    db.collection('applyJob').where('candidateId', '==', req.params.id).get().then(function(querySnapshot) {
      let data =[];
      querySnapshot.forEach(function(doc) {
        let obj = {
          job_title: doc.data().job_title,
          job_type: doc.data().job_type,
          address: doc.data().address,
          applied_date: doc.data().applied_date,
          jobId: doc.data().jobId,
          empId: doc.data().empId,
          candidateId: doc.data().candidateId
        };
        data.push(obj);
      });
      res.json(data);
    });
  });
  app.delete('/candidate/shortlist/:canid/:jobid', authenticate, function(req,res) {
    db.collection('shortlistedJob').where('candidateId', '==', req.params.canid).where('jobId', '==', req.params.jobid).get().then(function(querySnapshot) {
      id = '';
      querySnapshot.forEach(function(doc) {
        console.log('hello')
        id = doc.id;
      });
      console.log(id);
      db.collection('shortlistedJob').doc(id).delete().then(success=> {
        console.log(success);
        res.json({success: true});
      }, err => {
        res.json({success: false});
      });
      res.json({success: true});
    });
  });
  app.delete('/candidate/applyjob/:canid/:jobid', authenticate, function(req,res) {
    db.collection('applyJob').where('candidateId', '==', req.params.canid).where('jobId', '==', req.params.jobid).get().then(function(querySnapshot) {
      id = '';
      querySnapshot.forEach(function(doc) {
        console.log('hello')
        id = doc.id;
      });
      console.log(id);
      db.collection('applyJob').doc(id).delete().then(success=> {
        console.log(success);
        res.json({success: true});
      }, err => {
        res.json({success: false});
      });
      res.json({success: true});
    });
  });

  //Search
  // app.get('/candidate/search/:id', authenticate, function(req,res){
  //   db.collection('jobPost').orderBy("job_title").startAt(req.params.id).get().then(function(querySnapshot) {
  //     console.log('in a function')
  //     let data =[];
  //     querySnapshot.forEach(function(doc) {
  //       console.log(doc.data());
  //       data.push(doc.data());
  //     });
  //     res.json(data);
  //   });
  // });

  //Resume
  app.post('/candidate/add-resume', authenticate, function(req,res) {
    db.collection('candidateCv').add(req.body.data).then(data => {
      req.body.data.uid = data.id;
      res.json(req.body.data);
    });

  });

  app.get('/candidate/resumes/:id', authenticate, function(req,res){
    let data =[];
    db.collection('candidateCv').where("userId", "==", req.params.id).get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        let obj = {
          name: doc.data().name,
          cvId: doc.data().cvId,
          userId: doc.data().userId,
          uid: doc.id
        };
        data.push(obj);
      });
    }).then(()=>{
      res.json(data);
    });
  });

  app.get('/candidate/coverLetter/:id', authenticate, function(req,res){
    let data = [];
    console.log(req.params.id);
    db.collection('candidateCv').where("userId", "==", req.params.id).get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        data.push(doc.data());
      });
    }).then(()=>{
      console.dir('Cover data is ' + data);
      res.json(data[0]);
    });
  });

  app.post('/candidate/coverLetter/:id', authenticate, function(req,res){
    userId = req.params.id;
    db.collection('candidateCv').where("userId", "==", userId).get().then(function(querySnapshot) {
      //console.log(docs);
      console.log(querySnapshot);
      if(querySnapshot.size === 0) {
        console.log('inside');
        db.collection('candidateCv').add(req.body).then(data => {
          req.body.data.uid = data.id;
          res.json(req.body.data);
        });
      } else {

        querySnapshot.forEach(function(doc) {
          db.collection("candidateCv").doc(doc.id).update(req.body);
        });
      }
    });
  });

}
/* GET users listing. */

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
