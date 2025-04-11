// Copyright (c) 2020-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

//import {useSelector} from 'react-redux';

//import {isE10LicensedOrDevelopment, isE20LicensedOrDevelopment} from 'src/license';

// useAllowAddMessageToTimelineInCurrentTeam returns whether a user can add a
// post to the timeline in the current team
export function useAllowAddMessageToTimelineInCurrentTeam() {
    return true
}

// useAllowChannelExport returns whether exporting the channel is allowed
export function useAllowChannelExport() {
    return true
}

// useAllowPlaybookStatsView returns whether the server is licensed to show
// the stats in the playbook backstage dashboard
export function useAllowPlaybookStatsView() {
    return true
}

// useAllowPlaybookAndRunMetrics returns whether the server is licensed to
// enter and show playbook and run metrics
export function useAllowPlaybookAndRunMetrics() {
    return true
}

// useAllowRetrospectiveAccess returns whether the server is licenced for
// the retrospective feature.
export function useAllowRetrospectiveAccess() {
    return true
}

// useAllowPrivatePlaybooks returns whether the server is licenced for
// creating private playbooks
export function useAllowPrivatePlaybooks() {
    return true
}

// useAllowSetTaskDueDate returns whether the server is licensed for
// setting / editing checklist item due date
export function useAllowSetTaskDueDate() {
    return true
}

// useAllowMakePlaybookPrivate returns whether the server is licenced for
// converting public playbooks to private
export function useAllowMakePlaybookPrivate() {
    return true
}

// useAllowRequestUpdate returns whether the server is licenced for
// requesting an update
export function useAllowRequestUpdate() {
    return true
}
