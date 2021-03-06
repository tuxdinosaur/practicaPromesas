// PROMIFICACION

const koderToRegister = {
  isInterviewed: false,
  isEnroll: false,
  isAssist: false
};

function interview(koder, callback) {
  console.log("El koder está siendo entrevistado :0");
  koder.isInterviewed = true;
  error = !koder.isInterviewed;
  callback(error, koder);
}

function enroll(koder, callback) {
  console.log("El koder está inscribiendose :0");
  koder.isEnroll = true;
  error = !koder.isEnroll;
  callback(error, koder);
}

function assist(koder, callback) {
  console.log("El koder listo para asistir a clases");
  koder.isAssist = true;
  error = !koder.isAssist;
  callback(error, koder);
}

function interviewPromise(koder) {
  return new Promise((resolve, reject) => {
    interview(koder, (error, koderInterviewed) => {
      if (error) return reject(error);
      resolve(koderInterviewed);
    });
  });
}

function enrollPromise(koder) {
  return new Promise((resolve, reject) => {
    enroll(koder, (error, koderEnrolled) => {
      if (error) return reject(error);
      resolve(koderEnrolled);
    });
  });
}

function assistPromise(koder) {
  return new Promise((resolve, reject) => {
    assist(koder, (error, koderAssist) => {
      if (error) return reject(error);
      resolve(koderAssist);
    });
  });
}

interviewPromise(koderToRegister)
  .then(koderInterviewed => {
    enrollPromise(koderInterviewed)
      .then(koderEnrolled => {
        assistPromise(koderEnrolled)
          .then(koderAssist => {
            console.log("HECHO");
            console.log("Koder está asistiendo:", koderAssist);
          })
          .catch(error => {
            console.error("No está asistiendo");
          });
      })
      .catch(error => {
        console.error("No pudo inscribirse");
      });
  })
  .catch(error => {
    console.log("No se pudo entrevistar");
  });
