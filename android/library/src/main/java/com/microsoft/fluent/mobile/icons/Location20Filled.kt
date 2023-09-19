package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Location20: ImageVector
  get() {
    if (_location20 != null) {
      return _location20!!
    }
    _location20 = fluentIcon(name = "Filled.Location20", 20f) {
      materialPath {
          moveTo(14.95F, 13.955F)
          curveToRelative(2.733F, -2.735F, 2.733F, -7.169F, 0.0F, -9.904F)
          curveToRelative(-2.734F, -2.735F, -7.166F, -2.735F, -9.9F, 0.0F)
          curveToRelative(-2.733F, 2.735F, -2.733F, 7.17F, 0.0F, 9.904F)
          lineToRelative(1.521F, 1.499F)
          lineToRelative(2.043F, 1.985F)
          lineToRelative(0.133F, 0.118F)
          curveToRelative(0.775F, 0.628F, 1.91F, 0.588F, 2.64F, -0.118F)
          lineToRelative(2.435F, -2.37F)
          lineToRelative(1.128F, -1.114F)
          close()
          moveTo(10.0F, 12.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          reflectiveCurveToRelative(1.343F, -3.0F, 3.0F, -3.0F)
          reflectiveCurveToRelative(3.0F, 1.343F, 3.0F, 3.0F)
          reflectiveCurveToRelative(-1.343F, 3.0F, -3.0F, 3.0F)
          close()        
      }
    }
    return _location20!!
  }

private var _location20: ImageVector? = null
