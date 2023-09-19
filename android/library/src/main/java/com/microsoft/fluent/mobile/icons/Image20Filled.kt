package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Image20: ImageVector
  get() {
    if (_image20 != null) {
      return _image20!!
    }
    _image20 = fluentIcon(name = "Filled.Image20", 20f) {
      materialPath {
          moveTo(6.0F, 3.0F)
          curveTo(4.343F, 3.0F, 3.0F, 4.343F, 3.0F, 6.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 0.65F, 0.206F, 1.25F, 0.557F, 1.742F)
          lineToRelative(5.39F, -5.308F)
          curveToRelative(0.584F, -0.574F, 1.522F, -0.574F, 2.105F, 0.0F)
          lineToRelative(5.39F, 5.308F)
          curveTo(16.795F, 15.25F, 17.0F, 14.649F, 17.0F, 14.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          horizontalLineTo(6.0F)
          close()
          moveToRelative(0.0F, 14.0F)
          curveToRelative(-0.646F, 0.0F, -1.245F, -0.204F, -1.735F, -0.552F)
          lineToRelative(5.384F, -5.3F)
          curveToRelative(0.195F, -0.192F, 0.507F, -0.192F, 0.702F, 0.0F)
          lineToRelative(5.384F, 5.3F)
          curveTo(15.245F, 16.796F, 14.646F, 17.0F, 14.0F, 17.0F)
          horizontalLineTo(6.0F)
          close()
          moveToRelative(6.5F, -8.25F)
          curveToRelative(-0.69F, 0.0F, -1.25F, -0.56F, -1.25F, -1.25F)
          reflectiveCurveToRelative(0.56F, -1.25F, 1.25F, -1.25F)
          reflectiveCurveToRelative(1.25F, 0.56F, 1.25F, 1.25F)
          reflectiveCurveToRelative(-0.56F, 1.25F, -1.25F, 1.25F)
          close()        
      }
    }
    return _image20!!
  }

private var _image20: ImageVector? = null
