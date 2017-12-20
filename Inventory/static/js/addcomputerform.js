$(document).ready(function(){

      console.log("ready");
      $("#add-new-monitor-form-group").hide();
      $("#add-new-projector-form-group").hide();


      $("#model-input").change(function(){
        var str = "";
         $( "#model-input option:selected" ).each(function() {
           str += $( this ).text() + " ";
           console.log(str);

           //if it is not a desktop computer remove the monitor-input
           if(str!=="Desktop Computer"){
             console.log(typeof str);
              $("#monitor-input-group").hide();
           }else if(str==="Desktop Computer"){  //if it is a desktop computer show the monitor input
             console.log("show");
             $("#monitor-input-group").show();
           }
         });
      });


      $("#add-new-monitor-button").click(function(){
        console.log("add new monitor");
        if($("#add-new-monitor-form-group").is(':visible')){
          $("#add-new-monitor-form-group").hide();
        }else if($("#add-new-monitor-form-group").is(':hidden')){
          $("#add-new-monitor-form-group").show();

        }

      });

      $("#add-new-projector-button").click(function(){
        console.log("add new projector");
        if($("#add-new-projector-form-group").is(':visible')){
          $("#add-new-projector-form-group").hide();
        }else if($("#add-new-projector-form-group").is(':hidden')){
          $("#add-new-projector-form-group").show();

        }

      });

       //monitor input
      $('#submit-monitor-button').click(function(){
            var serial_number = $('#serial-number-monitor-input').val();
            var monitor_tag = $('#monitor-tag-input').val();
            var monitor_age = $('#monitor-age-input').val();

            var monitor = {
                "serialNo": serial_number,
                "tagNo": monitor_tag,
                "age": monitor_age
            };

            var json = JSON.stringify(monitor);

            console.log(json);


            //send data to server
            $.ajax({
                type: "POST",
                url: "http://127.0.0.1:8000/api/monitors/add",
                data: json,
                contentType: "application/json",
                success: handleResponse
            });

            function handleResponse(data){
                     console.log(data)
                     var monitor = data;
                     $('#monitor-input').prepend("<option value='"+monitor.id+"'>"+monitor.tagNo+"</option>");

            }
      });

      //projector input
      $('#submit-projector-button').click(function(){

            var projector_model = $('#projector-model-input').val();
            var projector_year = $('#projector-year-input').val();
            var serial_number = $('#serial-number-projector-input').val();
            var projector_tag = $('#projector-tag-input').val();

            var projector = {
                "model": projector_model,
                "year": projector_year,
                "serial_number": serial_number,
                "tag": projector_tag
            };

            console.log(projector);

            var json = JSON.stringify(projector);

            $.ajax({
                type: "POST",
                url: "http://127.0.0.1:8000/api/projectors/add",
                data: json,
                contentType: "application/json",
                success: handleResponse
            });

            function handleResponse(data){
                console.log(data);
                var projector = data;
                $('#projector-input').prepend("<option value='"+projector.id+"'>"+projector.projectorTag+"</option>");
            }

      });

      //Add computer to database
      $('#save-button').click(function(){

        var model = $('#model-input').val();
        var pctag = $('#pc-tag-input').val();
        var pcname = $('#pc-name-input').val();
        var pcmodelseries = $('#pc-model-series-input').val();
        var serialnumber = $('#serial-number-input').val();
        var os = $('#operating-system-input').val();
        var processor = $('#processor-input').val();
        var systemType = $('#system-type-input').val();
        var ram = $('#ram-input').val();
        var harddrive = $('#hard-drive-input').val();
        var monitor = $('#monitor-input').val();
        var projector = $('#projector-input').val();

        if(monitor==="null"){
            monitor=null;
        }

        if(projector==="null"){
            projector=null;
        }

        var computer = {
            "model": model,
            "tag" : pctag,
            "name" : pcname,
            "model_series": pcmodelseries,
            "serial_number": serialnumber,
            "os": os,
            "processor": processor,
            "systemType": systemType,
            "ram": ram,
            "hdd": harddrive,
            "monitor": monitor,
            "projector": projector
        };

        console.log(computer);

        var json = JSON.stringify(computer);

            $.ajax({
                type: "POST",
                url: "http://127.0.0.1:8000/api/computers/add",
                data: json,
                contentType: "application/json",
                success: handleResponse
            });

            function handleResponse(data){
                console.log(data);

            }





      });

    });
