import { SHOW_TRACKER,DELETE_TRACKER_CARD,RESUME_TRACKER_CARD,ADDTAGS,DELETETAGS,ADDCLIENT,ADDUSERGROUP,DELETECLIENT,DELETEUSERGROUP,ADDWORKSPACE,DELETEWORKSPACE,GETWORKSPACE,ADDTEAM } from './types'







export function TrackerItems(state) {
    return function (dispatch){
        dispatch ({
            type : SHOW_TRACKER,
            state
        })
    }}

    export function TrackerDelete(state) {
        return function (dispatch){
            dispatch ({
                type : DELETE_TRACKER_CARD,
                state
            })
        }}

        export function resumeTimer(state) {
            return function (dispatch){
                dispatch ({
                    type : RESUME_TRACKER_CARD,
                    state
                })
            }}
    


            
  /**  for tags   */          
export function RemoveTags(state) {
     return function (dispatch){
        dispatch ({
            type : DELETETAGS,
                state
                })
            }}
    
            export function ADDTags(state) {
                return function (dispatch){
                    dispatch ({
                         type : ADDTAGS,
                                state
                                })
                            }}

       /** FOR CLIENT  */                     

    export function ADDClient(state) {
            return function (dispatch){
                dispatch ({
                 type : ADDCLIENT,
                             state
                })
                    }}
  export function RemoveClient(state) {
    return function (dispatch){
          dispatch ({
           type : DELETECLIENT,
                 state
     })
           }}
                                                                                       
    
    
/** FOR USER GROUP */


export function ADDUserGroup(state) {
    return function (dispatch){
        dispatch ({
         type : ADDUSERGROUP,
                     state
        })
            }}
export function RemoveUserGroup(state) {
    return function (dispatch){
  dispatch ({
   type : DELETEUSERGROUP,
         state
})
   }}

/** FOR WORKSPACE */

export function ADDWorkSpace(state) {
    return function (dispatch){
        dispatch ({
         type : ADDWORKSPACE,
                     state
        })
            }}
export function RemoveWorkSpace(state) {
    return function (dispatch){
  dispatch ({
   type : DELETEWORKSPACE,
         state
})
   }}

/** FOR TEAM  */

export function ADDTeam(state) {
    return function (dispatch){
  dispatch ({
   type : ADDTEAM,
         state
})
   }}