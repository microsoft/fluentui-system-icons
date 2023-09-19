package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DataArea24: ImageVector
  get() {
    if (_dataArea24 != null) {
      return _dataArea24!!
    }
    _dataArea24 = fluentIcon(name = "Regular.DataArea24", 24f) {
      materialPath {
          moveTo(3.0F, 3.75F)
          curveTo(3.0F, 3.336F, 3.336F, 3.0F, 3.75F, 3.0F)
          reflectiveCurveTo(4.5F, 3.336F, 4.5F, 3.75F)
          verticalLineToRelative(6.258F)
          lineToRelative(3.65F, -1.922F)
          curveToRelative(0.23F, -0.12F, 0.506F, -0.114F, 0.73F, 0.018F)
          lineToRelative(3.82F, 2.246F)
          lineToRelative(5.6F, -4.2F)
          curveToRelative(0.227F, -0.17F, 0.531F, -0.198F, 0.785F, -0.07F)
          curveTo(19.34F, 6.205F, 19.5F, 6.465F, 19.5F, 6.75F)
          verticalLineTo(19.5F)
          horizontalLineToRelative(0.75F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(20.664F, 21.0F, 20.25F, 21.0F)
          horizontalLineTo(3.75F)
          curveTo(3.336F, 21.0F, 3.0F, 20.664F, 3.0F, 20.25F)
          verticalLineTo(3.75F)
          close()
          moveToRelative(1.5F, 7.953F)
          verticalLineTo(19.5F)
          horizontalLineTo(18.0F)
          verticalLineTo(8.25F)
          lineToRelative(-4.8F, 3.6F)
          curveToRelative(-0.242F, 0.181F, -0.57F, 0.2F, -0.83F, 0.046F)
          lineTo(8.48F, 9.608F)
          lineTo(4.5F, 11.703F)
          close()        
      }
    }
    return _dataArea24!!
  }

private var _dataArea24: ImageVector? = null
