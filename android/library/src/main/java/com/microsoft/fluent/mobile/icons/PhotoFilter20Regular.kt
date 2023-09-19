package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PhotoFilter20: ImageVector
  get() {
    if (_photoFilter20 != null) {
      return _photoFilter20!!
    }
    _photoFilter20 = fluentIcon(name = "Regular.PhotoFilter20", 20f) {
      materialPath {
          moveTo(2.0F, 8.0F)
          curveToRelative(0.0F, 2.707F, 1.793F, 4.996F, 4.257F, 5.743F)
          curveTo(7.004F, 16.207F, 9.293F, 18.0F, 12.0F, 18.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, -2.686F, 6.0F, -6.0F)
          curveToRelative(0.0F, -2.707F, -1.793F, -4.996F, -4.257F, -5.743F)
          curveTo(12.996F, 3.793F, 10.707F, 2.0F, 8.0F, 2.0F)
          curveTo(4.686F, 2.0F, 2.0F, 4.686F, 2.0F, 8.0F)
          close()
          moveToRelative(6.0F, -5.0F)
          curveToRelative(2.062F, 0.0F, 3.832F, 1.248F, 4.597F, 3.03F)
          curveTo(12.4F, 6.01F, 12.2F, 6.0F, 12.0F, 6.0F)
          curveToRelative(-3.314F, 0.0F, -6.0F, 2.686F, -6.0F, 6.0F)
          curveToRelative(0.0F, 0.201F, 0.01F, 0.4F, 0.03F, 0.597F)
          curveTo(4.247F, 11.832F, 3.0F, 10.062F, 3.0F, 8.0F)
          curveToRelative(0.0F, -2.761F, 2.239F, -5.0F, 5.0F, -5.0F)
          close()
          moveToRelative(9.0F, 9.0F)
          curveToRelative(0.0F, 2.761F, -2.239F, 5.0F, -5.0F, 5.0F)
          curveToRelative(-2.062F, 0.0F, -3.832F, -1.248F, -4.597F, -3.03F)
          curveTo(7.6F, 13.99F, 7.8F, 14.0F, 8.0F, 14.0F)
          curveToRelative(3.314F, 0.0F, 6.0F, -2.686F, 6.0F, -6.0F)
          curveToRelative(0.0F, -0.201F, -0.01F, -0.4F, -0.03F, -0.597F)
          curveTo(15.753F, 8.168F, 17.0F, 9.938F, 17.0F, 12.0F)
          close()        
      }
    }
    return _photoFilter20!!
  }

private var _photoFilter20: ImageVector? = null
