var PythonShell = require('python-shell');

var isError = 0;


(function loop() {
    if (isError == 0) {
        //PythonShell.run('VDO.py', {args: ['-i 0']}, function (err, results) 
        PythonShell.run('VDOS.py', function (err,results)
        {
          if (err)
          { 
            console.log(err);
            isError = 1;
          }
          console.log('results: %j', results);
          loop();//Coll agan
        });
    }
}());
