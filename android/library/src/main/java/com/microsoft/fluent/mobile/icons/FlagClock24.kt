package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.FlagClock24: ImageVector
  get() {
    if (_flagClock24 != null) {
      return _flagClock24!!
    }
    _flagClock24 = fluentIcon(name = "Regular.FlagClock24", 24f) {
      materialPath {
          moveTo(3.0F, 3.748F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(16.504F)
          curveToRelative(0.618F, 0.0F, 0.971F, 0.706F, 0.6F, 1.2F)
          lineTo(16.69F, 9.75F)
          lineToRelative(0.939F, 1.252F)
          lineTo(17.5F, 11.0F)
          curveToRelative(-0.552F, 0.0F, -1.087F, 0.069F, -1.599F, 0.198F)
          lineToRelative(-0.749F, -0.999F)
          curveToRelative(-0.2F, -0.266F, -0.2F, -0.633F, 0.0F, -0.9F)
          lineToRelative(3.602F, -4.8F)
          horizontalLineTo(4.5F)
          verticalLineTo(15.0F)
          horizontalLineToRelative(6.998F)
          curveToRelative(-0.198F, 0.474F, -0.34F, 0.976F, -0.422F, 1.5F)
          horizontalLineTo(4.5F)
          verticalLineToRelative(4.75F)
          curveToRelative(0.0F, 0.38F, -0.282F, 0.693F, -0.648F, 0.743F)
          lineTo(3.75F, 22.0F)
          curveToRelative(-0.38F, 0.0F, -0.693F, -0.282F, -0.743F, -0.648F)
          lineTo(3.0F, 21.25F)
          verticalLineTo(3.748F)
          close()
          moveTo(17.5F, 12.0F)
          curveToRelative(3.038F, 0.0F, 5.5F, 2.462F, 5.5F, 5.5F)
          reflectiveCurveTo(20.538F, 23.0F, 17.5F, 23.0F)
          reflectiveCurveTo(12.0F, 20.538F, 12.0F, 17.5F)
          reflectiveCurveToRelative(2.462F, -5.5F, 5.5F, -5.5F)
          close()
          moveToRelative(2.0F, 5.5F)
          horizontalLineToRelative(-2.0F)
          verticalLineTo(15.0F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          reflectiveCurveToRelative(-0.5F, 0.224F, -0.5F, 0.5F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(2.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveToRelative(-0.224F, -0.5F, -0.5F, -0.5F)
          close()        
      }
    }
    return _flagClock24!!
  }

private var _flagClock24: ImageVector? = null
