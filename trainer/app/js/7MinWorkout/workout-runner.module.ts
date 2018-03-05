import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '../shared/shared.module'

import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoDialogComponent } from './video-player/video-dialog/video-dialog.component';
import { DescriptionPanelComponent } from './description-panel/description-panel.component';
import { WorkoutAudioComponent } from './workout-audio/workout-audio.component';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        SharedModule],
    declarations: [
        VideoPlayerComponent,
        VideoDialogComponent,   
        DescriptionPanelComponent,
        WorkoutAudioComponent
    ],
    entryComponents: [
        VideoPlayerComponent,
        VideoDialogComponent,
        DescriptionPanelComponent,
        WorkoutAudioComponent
    ]
})
export class WorkoutRunnerModule { }