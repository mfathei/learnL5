<!DOCTYPE html>
<html lang="en" ng-app="myApp">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}" >
    <title>Gallery Application in angularJS</title>
    <link rel="stylesheet" type="text/css" href="{{ asset('bower_components/bootstrap/dist/css/bootstrap.min.css') }}">
</head>
<body>
<div class="container">

    <div ng-view></div>

</div>

<script type="text/javascript" src="{{ asset('bower_components/jquery/dist/jquery.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('bower_components/bootstrap/dist/js/bootstrap.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('bower_components/angular/angular.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('bower_components/angular-route/angular-route.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('bower_components/angular-cookies/angular-cookies.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/angular.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/controllers.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/services.js') }}"></script>

<script type="text/javascript"> var baseUrl = "{{ url('/') }}/" ;</script>

<script type="text/javascript">
    // to remove # from routing URLs
    angular.element(document.getElementsByTagName('head')).append(angular.element('<base href="' + window.location.pathname + '" />'));
</script>

</body>
</html>