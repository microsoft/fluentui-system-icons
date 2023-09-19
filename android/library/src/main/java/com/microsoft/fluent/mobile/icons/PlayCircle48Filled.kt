package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PlayCircle48: ImageVector
  get() {
    if (_playCircle48 != null) {
      return _playCircle48!!
    }
    _playCircle48 = fluentIcon(name = "Filled.PlayCircle48", 48f) {
      materialPath {
          moveTo(24.0F, 44.0F)
          curveToRelative(11.046F, 0.0F, 20.0F, -8.954F, 20.0F, -20.0F)
          reflectiveCurveTo(35.046F, 4.0F, 24.0F, 4.0F)
          reflectiveCurveTo(4.0F, 12.954F, 4.0F, 24.0F)
          reflectiveCurveToRelative(8.954F, 20.0F, 20.0F, 20.0F)
          close()
          moveToRelative(9.766F, -21.287F)
          curveToRelative(0.974F, 0.582F, 0.974F, 1.993F, 0.0F, 2.575F)
          lineToRelative(-12.362F, 7.387F)
          curveToRelative(-1.5F, 0.897F, -3.404F, -0.184F, -3.404F, -1.93F)
          verticalLineTo(17.256F)
          curveToRelative(0.0F, -1.747F, 1.904F, -2.828F, 3.404F, -1.932F)
          lineToRelative(12.362F, 7.388F)
          close()        
      }
    }
    return _playCircle48!!
  }

private var _playCircle48: ImageVector? = null
