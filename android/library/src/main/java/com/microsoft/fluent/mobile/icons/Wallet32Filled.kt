package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Wallet32: ImageVector
  get() {
    if (_wallet32 != null) {
      return _wallet32!!
    }
    _wallet32 = fluentIcon(name = "Filled.Wallet32", 32f) {
      materialPath {
          moveTo(3.0F, 6.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(16.75F)
          curveTo(24.545F, 3.0F, 26.0F, 4.455F, 26.0F, 6.25F)
          verticalLineToRelative(1.006F)
          curveToRelative(1.748F, 0.618F, 3.0F, 2.285F, 3.0F, 4.244F)
          verticalLineToRelative(13.0F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          horizontalLineToRelative(-17.0F)
          curveTo(5.015F, 29.0F, 3.0F, 26.985F, 3.0F, 24.5F)
          verticalLineTo(6.25F)
          horizontalLineToRelative(0.01F)
          curveTo(3.004F, 6.168F, 3.0F, 6.084F, 3.0F, 6.0F)
          close()
          moveToRelative(21.0F, 0.25F)
          curveTo(24.0F, 5.56F, 23.44F, 5.0F, 22.75F, 5.0F)
          horizontalLineTo(6.0F)
          curveTo(5.448F, 5.0F, 5.0F, 5.448F, 5.0F, 6.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(18.0F)
          verticalLineTo(6.25F)
          close()
          moveTo(21.0F, 18.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineToRelative(-3.0F)
          close()        
      }
    }
    return _wallet32!!
  }

private var _wallet32: ImageVector? = null
