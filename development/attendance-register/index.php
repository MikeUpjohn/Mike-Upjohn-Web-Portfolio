<?php
  /*include("php/database-connect.php");*/
  include("php/functions.php");
?>
<!doctype html>
<!--[if IE 9]><html class="lt-ie10" lang="en" > <![endif]-->
<html class="no-js" lang="en" data-useragent="Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Foundation Template | Sidebar</title>

    
    <meta name="description" content="Documentation and reference library for ZURB Foundation. JavaScript, CSS, components, grid and more." />
    
    <meta name="author" content="ZURB, inc. ZURB network also includes zurb.com" />
    <meta name="copyright" content="ZURB, inc. Copyright (c) 2013" />

    
    <!--<script src="modernizr.js"></script>-->
    <script src="//code.jquery.com/jquery-1.10.2.min.js"></script>
    <script src="scripts/bootstrap.min.js"></script>
    <link type='text/css' rel='stylesheet' href='css/bootstrap.min.css' />
    <link rel="stylesheet" href="css/foundation.css" />
  </head>
  <body>

<!-- Header and Nav -->
  
  <div class="row">
    <div class="large-3 columns">
      <h1><img src="https://d3h9j6pjreamyv.cloudfront.net/boards/house-of-travel/south-pacific-snaps-competition/252b7d7efc0a2ab62fe63d58c1cad812/IMG_2159/house-of-travel-220x" /></h1>
    </div>
    <div class="large-9 columns">
      <ul class="inline-list right">
        <!--<li><a href="#">English</a></li>
        <li><a href="#">Maths</a></li>
        <li><a href="#">Science</a></li>
        <li><a href="#">I.T.</a></li>-->
        <?php
          /*listSubjects($conn);*/
        ?>
      </ul>
    </div>
  </div>
  
  <!-- End Header and Nav -->
  
  
  <div class="row">    
    
    <!-- Main Content Section -->
    <!-- This has been source ordered to come first in the markup (and on small devices) but to be to the right of the nav on larger screens -->
    <div class="large-9 push-3 columns">
      
      <h3>Attendance Register <small>Mathematics Y7X4</small></h3>
      <table>
          <form name='attendance-maths-y7x4' id='attendance-maths-y7x4' action='' method='post'>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Attended</th>
            </tr>
            <?php
                PrintRegister($conn);
            ?>
            <div id='hello'></div>
          </form>
        </table>
    <script type='text/javascript'>
    window.onload = function() {
      $('.present-button').click(function(event) {
        alert($(this).data("studentclassid"));
        //event.preventDefault();
        var studentclassid = $(this).data("studentclassid");
        var button = this;
          $.ajax({
             url:"results.php",
             type:"POST",
             data: { studentclassid : studentclassid},

             success:function(returnData){
                if(returnData != "") {
                  console.log(returnData);
                  document.getElementById('hello').innerHTML = returnData;
                  alert(document.getElementById('hello'));
                  $(button).remove();
                }

             }
            });
      });
    }
    </script>
    
    <!-- Nav Sidebar -->
    <!-- This is source ordered to be pulled to the left on larger screens -->
    <div class="large-3 pull-9 columns">
        
      <ul class="side-nav">
        <!--<li><a href="#">English</a></li>
        <li><a href="#">Maths</a></li>
        <li><a href="#">Science</a></li>
        <li><a href="#">I.T.</a></li>-->
        <?php
          listSubjects($conn);
        ?>
      </ul>
      
      <p><img src="https://lh3.googleusercontent.com/-KIx_4qlp8M4/T5j0aULNAVI/AAAAAAAAC7U/k8aC4T_lGsw/s220/sandy-beach-sunset.jpg" /></p>
        
    </div>
    
  </div>
    
  
  <!-- Footer -->
  
  <footer class="row">
    <div class="large-12 columns">
      <hr />
      <div class="row">
        <div class="large-6 columns">
          <p>© Copyright no one at all. Go to town.</p>
        </div>
        <div class="large-6 columns">
          <!--<ul class="inline-list right">
            <li><a href="#">Section 1</a></li>
            <li><a href="#">Section 2</a></li>
            <li><a href="#">Section 3</a></li>
            <li><a href="#">Section 4</a></li>
          </ul>-->
        </div>
      </div>
    </div> 
  </footer>
<!-- Modal -->
<!--<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>-->