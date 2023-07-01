package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Checkmark32: ImageVector
  get() {
    if (_checkmark32 != null) {
      return _checkmark32!!
    }
    _checkmark32 = fluentIcon(name = "Regular.Checkmark32", 32f) {
      materialPath {
          moveTo(29.726F, 5.312F)
          curveToRelative(0.38F, 0.401F, 0.363F, 1.034F, -0.038F, 1.414F)
          lineToRelative(-19.0F, 18.0F)
          curveToRelative(-0.194F, 0.183F, -0.452F, 0.282F, -0.719F, 0.274F)
          curveToRelative(-0.266F, -0.009F, -0.518F, -0.123F, -0.7F, -0.318F)
          lineToRelative(-7.0F, -7.5F)
          curveToRelative(-0.377F, -0.403F, -0.355F, -1.036F, 0.049F, -1.413F)
          curveToRelative(0.403F, -0.377F, 1.036F, -0.355F, 1.413F, 0.049F)
          lineToRelative(6.313F, 6.763F)
          lineTo(28.312F, 5.274F)
          curveToRelative(0.401F, -0.38F, 1.034F, -0.363F, 1.414F, 0.038F)
          close()        
      }
    }
    return _checkmark32!!
  }

private var _checkmark32: ImageVector? = null
