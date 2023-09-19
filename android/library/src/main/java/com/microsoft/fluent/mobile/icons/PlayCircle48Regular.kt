package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PlayCircle48: ImageVector
  get() {
    if (_playCircle48 != null) {
      return _playCircle48!!
    }
    _playCircle48 = fluentIcon(name = "Regular.PlayCircle48", 48f) {
      materialPath {
          moveTo(33.766F, 22.713F)
          lineToRelative(-12.362F, -7.388F)
          curveTo(19.904F, 14.43F, 18.0F, 15.51F, 18.0F, 17.257F)
          verticalLineToRelative(13.487F)
          curveToRelative(0.0F, 1.747F, 1.904F, 2.828F, 3.404F, 1.931F)
          lineToRelative(12.362F, -7.387F)
          curveToRelative(0.974F, -0.582F, 0.974F, -1.993F, 0.0F, -2.575F)
          close()
          moveTo(24.0F, 44.0F)
          curveToRelative(11.046F, 0.0F, 20.0F, -8.954F, 20.0F, -20.0F)
          reflectiveCurveTo(35.046F, 4.0F, 24.0F, 4.0F)
          reflectiveCurveTo(4.0F, 12.954F, 4.0F, 24.0F)
          reflectiveCurveToRelative(8.954F, 20.0F, 20.0F, 20.0F)
          close()
          moveToRelative(0.0F, -37.5F)
          curveToRelative(9.665F, 0.0F, 17.5F, 7.835F, 17.5F, 17.5F)
          reflectiveCurveTo(33.665F, 41.5F, 24.0F, 41.5F)
          reflectiveCurveTo(6.5F, 33.665F, 6.5F, 24.0F)
          reflectiveCurveTo(14.335F, 6.5F, 24.0F, 6.5F)
          close()        
      }
    }
    return _playCircle48!!
  }

private var _playCircle48: ImageVector? = null
