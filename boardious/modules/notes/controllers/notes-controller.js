'use strict';

angular.module('boardious')
  .controller('NotesCtrl', function (BoardsModel, NotesModel, $stateParams, $state) {
    var ctrl = this,
      boardId = $stateParams.boardId;

    ctrl.loading = false;

    ctrl.newNote = {
      title: '',
      content: ''
    };

    ctrl.goBack = function() {
      $state.go('boards');
    };

    ctrl.resetForm = function () {
      ctrl.loading = false;
      ctrl.newNote = {
        title: '',
        content: ''
      };
    };

    ctrl.getBoard = function () {
      BoardsModel.getId(boardId)
        .then(function (board) {
          ctrl.board = board.data.data;
        }, function (reason) {
          //
        });
    };

    ctrl.getNotes = function () {
      NotesModel.get(boardId)
        .then(function (notes) {
          ctrl.notes = (notes.data.data.length > 0) ? notes.data.data : [];
        }, function (reason) {
          //
        });
    };

    ctrl.createNote = function (note, isValid) {
      // console.log(note); return false;
      if (isValid) {
        ctrl.loading = true;
        note.BoardId = boardId;
        NotesModel.post(note)
          .then(function (result) {
            ctrl.getNotes();
          })
          .catch(function (reason) {
            //
          })
          .finally(function() {
            ctrl.resetForm();
          });
      }
    };

    ctrl.updateNote = function (noteId, note, isValid) {
      if (isValid) {
        ctrl.loading = true;

        NotesModel.put(note)
          .then(function (result) {
            ctrl.getNotes();
            ctrl.resetForm();
          })
          .catch(function (reason) {
            //
          })
          
      }
    };

    ctrl.deleteNote = function (noteId) {
      NotesModel.delete(noteId)
        .then(function (result) {
          ctrl.getNotes();
        })
        .catch(function (reason) {
          //
        })
        .finally(function() {
          ctrl.cancelEditing();
        });
    };

    ctrl.setEditedNote = function(noteId, note) {
      ctrl.editedNoteId = noteId;
      ctrl.editedNote = angular.copy(note);
      ctrl.isEditing = true;
    };

    ctrl.isCurrentNote = function(noteId) {
      return ctrl.editedNote !== null && ctrl.editedNoteId === noteId;
    };

    ctrl.cancelEditing = function() {
      ctrl.loading = false;
      ctrl.editedNoteId = null;
      ctrl.editedNote = null;
      ctrl.isEditing = false;
    };

    ctrl.getBoard();
    ctrl.getNotes();
  });
