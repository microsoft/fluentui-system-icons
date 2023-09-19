package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MusicNote220: ImageVector
  get() {
    if (_musicNote220 != null) {
      return _musicNote220!!
    }
    _musicNote220 = fluentIcon(name = "Filled.MusicNote220", 220f) {
      materialPath {
          moveTo(15.987F, 3.016F)
          curveToRelative(-0.096F, -0.586F, -0.695F, -0.974F, -1.285F, -0.79F)
          lineToRelative(-7.0F, 2.187F)
          curveTo(7.284F, 4.543F, 7.0F, 4.931F, 7.0F, 5.368F)
          verticalLineTo(13.5F)
          curveTo(6.582F, 13.186F, 6.063F, 13.0F, 5.5F, 13.0F)
          curveTo(4.12F, 13.0F, 3.0F, 14.12F, 3.0F, 15.5F)
          curveTo(3.0F, 16.881F, 4.12F, 18.0F, 5.5F, 18.0F)
          reflectiveCurveTo(8.0F, 16.881F, 8.0F, 15.5F)
          verticalLineTo(8.368F)
          lineToRelative(7.0F, -2.188F)
          verticalLineToRelative(5.32F)
          curveToRelative(-0.418F, -0.314F, -0.937F, -0.5F, -1.5F, -0.5F)
          curveToRelative(-1.38F, 0.0F, -2.5F, 1.12F, -2.5F, 2.5F)
          curveToRelative(0.0F, 1.381F, 1.12F, 2.5F, 2.5F, 2.5F)
          reflectiveCurveToRelative(2.5F, -1.119F, 2.5F, -2.5F)
          verticalLineTo(3.18F)
          curveToRelative(0.0F, -0.056F, -0.005F, -0.11F, -0.013F, -0.164F)
          close()        
      }
    }
    return _musicNote220!!
  }

private var _musicNote220: ImageVector? = null
