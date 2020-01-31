const koderToRegister = {
  isInterviewed: false,
  isEnrolled: false,
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
  koder.isEnrolled = true;
  error = !koder.isEnrolled;
  callback(error, koder);
}

function assist(koder, callback) {
  console.log("El koder listo para asistir a clases");
  koder.isAssist = true;
  error = !koder.isAssist;
  callback(error, koder);
}

interview(koderToRegister, (error, koderInterviewed) => {
  if (error) {
    console.error("No se pudo inscribir unu");
    return;
  }
  enroll(koderInterviewed, (error, koderEnrolled) => {
    if (error) {
      console.error("No se pudo entrevistar unu");
      return;
    }
    assist(koderEnrolled, (error, koderAssist) => {
      if (error) {
        console.error("No puede asistir unu");
        return;
      }
      console.log("Hecho");
      console.log("Koder: ", koderAssist);
    });
  });
});
