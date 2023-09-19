package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ImageCircle24: ImageVector
  get() {
    if (_imageCircle24 != null) {
      return _imageCircle24!!
    }
    _imageCircle24 = fluentIcon(name = "Filled.ImageCircle24", 24f) {
      materialPath {
          moveTo(19.564F, 18.542F)
          curveTo(21.082F, 16.788F, 22.0F, 14.502F, 22.0F, 12.0F)
          curveToRelative(0.0F, -5.523F, -4.477F, -10.0F, -10.0F, -10.0F)
          reflectiveCurveTo(2.0F, 6.477F, 2.0F, 12.0F)
          curveToRelative(0.0F, 2.501F, 0.918F, 4.788F, 2.436F, 6.542F)
          lineToRelative(5.983F, -5.909F)
          curveToRelative(0.876F, -0.865F, 2.286F, -0.865F, 3.162F, 0.0F)
          lineToRelative(5.983F, 5.909F)
          close()
          moveTo(18.5F, 19.599F)
          lineToRelative(-5.973F, -5.898F)
          curveToRelative(-0.292F, -0.289F, -0.762F, -0.289F, -1.054F, 0.0F)
          lineTo(5.5F, 19.599F)
          curveTo(7.248F, 21.096F, 9.518F, 22.0F, 12.0F, 22.0F)
          reflectiveCurveToRelative(4.752F, -0.904F, 6.5F, -2.4F)
          close()
          moveTo(17.5F, 8.5F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          reflectiveCurveToRelative(-2.0F, -0.895F, -2.0F, -2.0F)
          reflectiveCurveToRelative(0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.895F, 2.0F, 2.0F)
          close()        
      }
    }
    return _imageCircle24!!
  }

private var _imageCircle24: ImageVector? = null
