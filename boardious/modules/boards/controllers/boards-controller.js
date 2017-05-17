'use strict';

angular.module('boardious')
  .controller('BoardsCtrl', function (BoardsModel) {
    var ctrl = this;

    ctrl.loading = false;

    ctrl.newBoard = {
      title: '',
      description: ''
    };

    ctrl.resetForm = function () {
      ctrl.loading = false;
      ctrl.newBoard = {
        title: '',
        description: ''
      };
    };

    ctrl.getBoards = function () {
      BoardsModel.get().then(
        function (result) {
          ctrl.boards = (result.data.data.length > 0) ? result.data.data : [];
          ctrl.resetForm();
        });
    };

    ctrl.createBoard = function (board, isValid) {
      if (isValid) {
        ctrl.loading = true;

        BoardsModel.post(board)
          .then(function (result) {
            ctrl.getBoards();
          })
          .catch(function (reason) {
            //
          })
          .finally(function () {
            ctrl.resetForm();
          });
      }
    };

    ctrl.updateBoard = function (boardId, board, isValid) {
      if (isValid) {
        ctrl.loading = true;
        BoardsModel.put(board).then(function (result) {
            ctrl.getBoards();
          })
          .catch(function (reason) {
            //
          })
          .finally(function () {
            ctrl.cancelEditing();
          });
      }
    };

    ctrl.deleteBoard = function (boardId) {
      BoardsModel.delete(boardId)
        .then(function (result) {
          ctrl.getBoards();
        })
        .catch(function (reason) {
          //
        })
        .finally(function () {
          ctrl.cancelEditing();
        });
    };

    ctrl.setEditedBoard = function (boardId, board) {
      ctrl.editedBoardId = boardId;
      ctrl.editedBoard = angular.copy(board);
      ctrl.isEditing = true;
    };

    ctrl.isCurrentBoard = function (boardId) {
      return ctrl.editedBoard !== null && ctrl.editedBoardId === boardId;
    };

    ctrl.cancelEditing = function () {
      ctrl.loading = false;
      ctrl.editedBoardId = null;
      ctrl.editedBoard = null;
      ctrl.isEditing = false;
    };

    ctrl.getBoards();
  });

