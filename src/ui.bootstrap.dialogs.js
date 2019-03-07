import createResolver from "options-resolver";

angular
  .module("ui.bootstrap.dialogs", ["ui.bootstrap"])
  .factory("$dialogConfirm", function($uibModal, $sce) {
    return function(message, options = {}) {
      let size = options.size ? options.size : "sm";
      const modal = $uibModal.open({
        size: size,
        backdrop: "static",
        template: `
                    <div class="modal-header  alert {{ alert }}">
                        <h4 class="modal-title" ng-bind-html="title"></h4>
                    </div>
                    <div class="modal-body" ng-bind-html="message"></div>
                    <div class="modal-footer">
                        <button class="btn btn-default" ng-click="modal.dismiss()">{{ denyLabel }}</button>
                        <button class="btn btn-primary" ng-click="modal.close()">{{ confirmLabel }}</button>
                    </div>
                `,
        controller: function($scope, $uibModalInstance) {
          $scope.modal = $uibModalInstance;
          const resolver = createResolver();
          resolver.setDefaults({
            title: "Confirm",
            alert: "alert-info",
            size: "sm",
            confirmLabel: "Yes",
            denyLabel: "No"
          });
          resolver.resolve(options).then(options => {
            $scope.title = $sce.trustAsHtml(options.title);
            $scope.alert = options.alert;
            $scope.confirmLabel = options.confirmLabel;
            $scope.denyLabel = options.denyLabel;
            $scope.message = $sce.trustAsHtml(message);
          });
        }
      });
      return modal.result;
    };
  })
  .factory("$dialogAlert", function($uibModal) {
    return function(message, options) {
      // we need to know the size before the options are resolved
      let size = options.size ? options.size : "sm";
      let modal = $uibModal.open({
        size: size,
        backdrop: "static",
        template: `
                    <div class="modal-header alert {{ alert }}">
                        <h4 class="modal-title" ng-bind-html="title"></h4>
                    </div>
                    <div class="modal-body" ng-bind-html="message"></div>
                    <div class="modal-footer">
                        <button class="btn btn-primary" ng-click="modal.close()">{{ confirmLabel }}</button>
                    </div>
                `,
        controller: function($scope, $uibModalInstance, $sce) {
          $scope.modal = $uibModalInstance;
          const resolver = createResolver();
          resolver.setDefaults({
            title: "Message",
            alert: "alert-info",
            size: "sm",
            confirmLabel: "Ok"
          });
          resolver.resolve(options).then(options => {
            $scope.title = $sce.trustAsHtml(options.title);
            $scope.alert = options.alert;
            $scope.confirmLabel = options.confirmLabel;
            $scope.message = $sce.trustAsHtml(message);
          });
        }
      });

      return modal.result;
    };
  })
  .factory("$dialogPrompt", function($uibModal, $sce) {
    return function(message, options = {}) {
      // we need to know the size before the options are resolved
      let size = options.size ? options.size : "sm";
      const modal = $uibModal.open({
        size: size,
        backdrop: "static",
        template: `
                <div class="modal-header  alert {{ alert }}">
                    <h4 class="modal-title" ng-bind-html="title"></h4>
                </div>
                <div class="modal-body">
                    <div ng-bind-html="message"></div>
                    <input type="text" ng-model="output" class="form-control">
                </div>
                <div class="modal-footer">
                    <button class="btn btn-default" ng-click="modal.dismiss()">{{ denyLabel }}</button>
                    <button class="btn btn-primary" ng-click="modal.close(output)">{{ confirmLabel }}</button>
                </div>
            `,
        controller: function($scope, $uibModalInstance) {
          $scope.modal = $uibModalInstance;
          const resolver = createResolver();
          resolver.setDefaults({
            title: "Message",
            alert: "alert-info",
            size: "sm",
            confirmLabel: "Ok",
            denyLabel: "Cancel"
          });
          resolver.resolve(options).then(options => {
            $scope.title = $sce.trustAsHtml(options.title);
            $scope.alert = options.alert;
            $scope.confirmLabel = options.confirmLabel;
            $scope.denyLabel = options.denyLabel;
            $scope.message = $sce.trustAsHtml(message);
          });
        }
      });

      return modal.result;
    };
  });
