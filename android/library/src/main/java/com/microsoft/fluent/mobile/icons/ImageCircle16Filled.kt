package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ImageCircle16: ImageVector
  get() {
    if (_imageCircle16 != null) {
      return _imageCircle16!!
    }
    _imageCircle16 = fluentIcon(name = "Filled.ImageCircle16", 16f) {
      materialPath {
          moveTo(14.0F, 8.0F)
          curveToRelative(0.0F, 1.481F, -0.537F, 2.837F, -1.427F, 3.884F)
          lineToRelative(-3.52F, -3.466F)
          curveToRelative(-0.585F, -0.574F, -1.521F, -0.574F, -2.105F, 0.0F)
          lineToRelative(-3.521F, 3.466F)
          curveTo(2.537F, 10.837F, 2.0F, 9.481F, 2.0F, 8.0F)
          curveToRelative(0.0F, -3.314F, 2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
          close()
          moveTo(8.35F, 9.131F)
          lineToRelative(3.515F, 3.459F)
          curveTo(10.82F, 13.47F, 9.472F, 14.0F, 8.0F, 14.0F)
          curveToRelative(-1.472F, 0.0F, -2.82F, -0.53F, -3.865F, -1.41F)
          lineTo(7.65F, 9.13F)
          curveToRelative(0.195F, -0.191F, 0.507F, -0.191F, 0.702F, 0.0F)
          close()
          moveTo(10.0F, 7.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          reflectiveCurveToRelative(-1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          close()        
      }
    }
    return _imageCircle16!!
  }

private var _imageCircle16: ImageVector? = null
