import {SHOW_TRACKER,DELETE_TRACKER_CARD,RESUME_TRACKER_CARD,ADDTAGS,DELETETAGS,ADDCLIENT,ADDUSERGROUP,DELETECLIENT,DELETEUSERGROUP,ADDWORKSPACE,DELETEWORKSPACE,ADDTEAM} from '../Actions/types';

const initialState = {
    TrackerValue: [],
    showTracker:true,
    ResumeTimerCard: '',
    Tags: [],
    Clients: [],
    UserGroup: [],
    WorkSpace: [],
    Team : []
};


export default function(state=initialState,action){
    
    switch (action.type){
        case SHOW_TRACKER:
            return {
                ...state,

                TrackerValue: [action.state,...state.TrackerValue]
                

            }

        case DELETE_TRACKER_CARD: 
            return{

                ...state,
                TrackerValue: state.TrackerValue.filter(
                    (TrackerValue) => TrackerValue.trackerID !== action.state
                )

            }

            case RESUME_TRACKER_CARD:
            return {
                ...state,

                ResumeTimerCard: action.state
                

            }
        

            /** for tags */
        case ADDTAGS: 
        return {
            ...state,
            Tags : [...state.Tags,action.state],
            
        }

        case DELETETAGS: 
        return {
            ...state,
            Tags : state.Tags.filter(
                (Tags)=> Tags.key !== action.state
            )
        }
        /** for clients */
        case ADDCLIENT:
        return {
            ...state,
            Clients:  [...state.Clients,action.state]
        }

        case DELETECLIENT: 
        return {
            ...state,
            Clients : state.Clients.filter(
                (tag,index )=> index !== action.state
            )
        }

        /** for user group */

        case ADDUSERGROUP:
        return {
            ...state,
            UserGroup:  [...state.UserGroup,action.state]
        }

        case DELETEUSERGROUP: 
        return {
            ...state,
            UserGroup : state.UserGroup.filter(
                (tag,index )=> index !== action.state
            )
        }

        /** for workspace */

        case ADDWORKSPACE:
        return {
            ...state,
            WorkSpace:  [...state.WorkSpace,action.state]
        }

        case DELETEWORKSPACE: 
        return {
            ...state,
            WorkSpace : state.WorkSpace.filter(
                (tag,index )=> index !== action.state
            )
        }
        /**for team */
        case ADDTEAM: 
        return {
            ...state,
            Team:  [...state.Team,action.state]
            
        }



        default: 
         return state
        
        
        
        
        
    }}