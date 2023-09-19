package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Headphones48: ImageVector
  get() {
    if (_headphones48 != null) {
      return _headphones48!!
    }
    _headphones48 = fluentIcon(name = "Filled.Headphones48", 48f) {
      materialPath {
          moveTo(24.0F, 6.5F)
          curveTo(14.335F, 6.5F, 6.5F, 14.335F, 6.5F, 24.0F)
          verticalLineToRelative(4.0F)
          horizontalLineToRelative(9.25F)
          curveToRelative(0.69F, 0.0F, 1.25F, 0.56F, 1.25F, 1.25F)
          verticalLineToRelative(13.5F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          horizontalLineToRelative(-6.0F)
          curveTo(6.574F, 44.0F, 4.0F, 41.426F, 4.0F, 38.25F)
          verticalLineTo(24.0F)
          curveTo(4.0F, 12.954F, 12.954F, 4.0F, 24.0F, 4.0F)
          reflectiveCurveToRelative(20.0F, 8.954F, 20.0F, 20.0F)
          verticalLineToRelative(14.25F)
          curveToRelative(0.0F, 3.176F, -2.574F, 5.75F, -5.75F, 5.75F)
          horizontalLineToRelative(-6.0F)
          curveTo(31.56F, 44.0F, 31.0F, 43.44F, 31.0F, 42.75F)
          verticalLineToRelative(-13.5F)
          curveToRelative(0.0F, -0.69F, 0.56F, -1.25F, 1.25F, -1.25F)
          horizontalLineToRelative(9.25F)
          verticalLineToRelative(-4.0F)
          curveToRelative(0.0F, -9.665F, -7.835F, -17.5F, -17.5F, -17.5F)
          close()        
      }
    }
    return _headphones48!!
  }

private var _headphones48: ImageVector? = null
