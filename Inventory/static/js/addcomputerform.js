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
            var year_of_purchase = $('#year-of-purchase-input').val();
            var startLease = $('#year-of-leasing-start').val();
            var endLease = $('#year-of-leasing-end').val();
            var warrantyPeriod = $('#warranty-period-input').val();
            var extendedWarranty= $('#extended-warranty-period-input').val();

            var monitor = {
                "serialNo": serial_number,
                "tagNo": monitor_tag,
                "year_of_purchase": year_of_purchase,
                "start_leasing": startLease,
                "end_leasing": endLease,
                "warranty_period": warrantyPeriod,
                "extended_warranty": extendedWarranty
            };

            var json = JSON.stringify(monitor);

            console.log(json);
            var isValid = validate(".required");
            console.log(isValid);

            if(!isValid){
                return;
            }


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
                 $('#add-message').text(data+" successfully added");
                 $( "#dialog-added" ).dialog( "open" );
                 var monitor = data;
                 $('#monitor-input').prepend("<option value='"+monitor.id+"'>"+monitor.tagNo+"</option>");

            }
      });

      //projector input
      $('#submit-projector-button').click(function(){

            var projector_model = $('#projector-model-input').val();
            var projector_year = $('#year-of-purchase-input').val();
            var startLease = $('#year-of-leasing-start').val();
            var endLease = $('#year-of-leasing-end').val();
            var warrantyPeriod = $('#warranty-period-input').val();
            var extendedWarranty= $('#extended-warranty-period-input').val();
            var serial_number = $('#serial-number-projector-input').val();
            var projector_tag = $('#projector-tag-input').val();

            var projector = {
                "model": projector_model,
                "year_of_purchase": projector_year,
                "start_leasing": startLease,
                "end_leasing": endLease,
                "warranty_period": warrantyPeriod,
                "extended_warranty": extendedWarranty,
                "serial_number": serial_number,
                "tag": projector_tag
            };

            console.log(projector);

            var json = JSON.stringify(projector);
            var isValid = validate(".required");
            console.log(isValid);

            if(!isValid){
                return;
            }

            $.ajax({
                type: "POST",
                url: "http://127.0.0.1:8000/api/projectors/add",
                data: json,
                contentType: "application/json",
                success: handleResponse
            });

            function handleResponse(data){
                console.log(data);
                $('#add-message').text(data+" successfully added");
                $( "#dialog-added" ).dialog( "open" );
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
        var yearOfPurchase = $('#year-of-purchase-input').val();
        var startLease = $('#year-of-leasing-start').val();
        var endLease = $('#year-of-leasing-end').val();
        var warrantyPeriod = $('#warranty-period-input').val();
        var extendedWarranty= $('#extended-warranty-period-input').val();
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
            "year_of_purchase": yearOfPurchase,
            "start_lease": startLease,
            "end_lease": endLease,
            "warranty_period": warrantyPeriod,
            "extended_warranty": extendedWarranty,
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

        var isValid = validate(".required");
        console.log(isValid);

        if(!isValid){
            return;
        }

            $.ajax({
                type: "POST",
                url: "http://127.0.0.1:8000/api/computers/add",
                data: json,
                contentType: "application/json",
                success: handleResponse
            });

            function handleResponse(data){
                console.log(data);
                $('#add-message').text(data+" successfully added");
                $( "#dialog-added" ).dialog( "open" );

            }





      });


      //add system to database
      $('#submit-system-button').click(function(){

            var system_name = $('#system-name-input').val();
            var location = $('#system-location-input').val();


            var system = {
                "system_name": system_name,
                "location": location,

            };

            console.log(system);

            var json = JSON.stringify(system);
            var isValid = validate(".required");
            console.log(isValid);

            if(!isValid){
                return;
            }

            $.ajax({
                type: "POST",
                url: "http://127.0.0.1:8000/api/systems/add",
                data: json,
                contentType: "application/json",
                success: handleResponse
            });

            function handleResponse(data){
                console.log(data);
                 $('#add-message').text(data+" successfully added");
                 $( "#dialog-added" ).dialog( "open" );
            }

      });


      //add email to database
      $('#submit-email-button').click(function(){

        var licenses = $('#licenses-input').val();
        var principal_name = $('#principal-name-input').val();
        var date = $('#date-created-input').val();

        var email = {
            "licenses": licenses,
            "principal_name": principal_name,
            "date_created": date
        };

        console.log(email);

        var isValid = validate(".required");
        console.log(isValid);

        if(!isValid){
            return;
        }

        var json = JSON.stringify(email);

            $.ajax({
                type: "POST",
                url: "http://127.0.0.1:8000/api/email/add",
                data: json,
                contentType: "application/json",
                success: handleResponse
            });

            function handleResponse(data){
                console.log(data);
                 $('#add-message').text(data+" successfully added");
                 $( "#dialog-added" ).dialog( "open" );
            }

      });


      //add dc asset
      $('#submit-asset-button').click(function() {
        var equipment = $('#equipment-input').val();
        var description = $('#description-input').val();
        var serial_number = $('#serial-number-input').val();
        var yearOfPurchase = $('#year-of-purchase-input').val();
        var startLease = $('#year-of-leasing-start').val();
        var endLease = $('#year-of-leasing-end').val();
        var warrantyPeriod = $('#warranty-period-input').val();
        var extendedWarranty= $('#extended-warranty-period-input').val();

        var dcasset = {
            "equipment": equipment,
            "description": description,
            "serial_number": serial_number,
            "year_of_purchase": yearOfPurchase,
            "start_lease": startLease,
            "end_lease": endLease,
            "warranty_period": warrantyPeriod,
            "extended_warranty": extendedWarranty
        };

        console.log(dcasset);

        var json = JSON.stringify(dcasset);

         var isValid = validate(".required");
        console.log(isValid);

        if(!isValid){
            return;
        }

            $.ajax({
                type: "POST",
                url: "http://127.0.0.1:8000/api/dcasset/add",
                data: json,
                contentType: "application/json",
                success: handleResponse
            });

            function handleResponse(data){
                console.log(data);
                 $('#add-message').text(data+" successfully added");
                 $( "#dialog-added" ).dialog( "open" );
            }

      });


      $('#add-server-button').click(function(){
        var hostname = $('#hostname-input').val();
        var server_model = $('#server-model-input').val();
        var ipv4 = $('#ip-input').val();
        var domain = $('#domain-input').val();
        var username = $('#username-input').val();
        var password = $('#password-input').val();
        var yearOfPurchase = $('#year-of-purchase-input').val();
        var startLease = $('#year-of-leasing-start').val();
        var endLease = $('#year-of-leasing-end').val();
        var warrantyPeriod = $('#warranty-period-input').val();
        var extendedWarranty= $('#extended-warranty-period-input').val();
        var os = $('#operating-system-input').val();
        var serial_number = $('#serial-number-input').val();
        var product_key = $('#product-key-input').val();
        var processor = $('#processor-input').val();
        var hdd = $('#hard-drive-input').val();
        var application = $('#application-input').val();
        var location = $('#location-input').val();


        server = {
            "hostname": hostname,
            "server_model": server_model,
            "username": username,
            "password": password,
            "year_of_purchase": yearOfPurchase,
            "start_lease": startLease,
            "end_lease": endLease,
            "warranty_period": warrantyPeriod,
            "extended_warranty": extendedWarranty,
            "ip": ipv4,
            "domain": domain,
            "username": username,
            "password": password,
            "os": os,
            "serial_number": serial_number,
            "product_key": product_key,
            "processor": processor,
            "hdd": hdd,
            "application": application,
            "location": location
        }

        console.log(server);

        var isValid = validate(".required");
        console.log(isValid);

        if(!isValid){
            return;
        }

        var json = JSON.stringify(server);

            $.ajax({
                type: "POST",
                url: "http://127.0.0.1:8000/api/server/add",
                data: json,
                contentType: "application/json",
                success: handleResponse
            });

            function handleResponse(data){
                console.log(data);
                   $('#add-message').text(data+" successfully added");
                 $( "#dialog-added" ).dialog( "open" );
            }

      });

      $('#submit-software-button').click(function(){
        var software_name = $('#software-name-input').val();

        var software = {
            'software_name': software_name
        };

        console.log(software);

        var json = JSON.stringify(software);

        var isValid = validate(".required");
        console.log(isValid);

        if(!isValid){
            return;
        }

            $.ajax({
                type: "POST",
                url: "http://127.0.0.1:8000/api/software/add",
                data: json,
                contentType: "application/json",
                success: handleResponse
            });

            function handleResponse(data){
                console.log(data);
                $('#add-message').text(data+" successfully added");
                 $( "#dialog-added" ).dialog( "open" );
            }


      });


    });

