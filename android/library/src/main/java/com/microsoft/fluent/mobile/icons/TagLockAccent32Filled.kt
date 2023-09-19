package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TagLockAccent32: ImageVector
  get() {
    if (_tagLockAccent32 != null) {
      return _tagLockAccent32!!
    }
    _tagLockAccent32 = fluentIcon(name = "Filled.TagLockAccent32", 32f) {
      materialPath {
          moveTo(18.684F, 4.0F)
          curveToRelative(-0.76F, 0.0F, -1.494F, 0.29F, -2.05F, 0.81F)
          lineTo(4.455F, 16.203F)
          curveToRelative(-1.342F, 1.256F, -1.377F, 3.373F, -0.078F, 4.672F)
          lineToRelative(6.326F, 6.326F)
          curveToRelative(1.174F, 1.174F, 3.023F, 1.262F, 4.298F, 0.264F)
          verticalLineTo(22.0F)
          curveToRelative(0.0F, -1.892F, 1.314F, -3.478F, 3.08F, -3.894F)
          curveTo(18.5F, 15.771F, 20.542F, 14.0F, 23.0F, 14.0F)
          curveToRelative(1.508F, 0.0F, 2.86F, 0.668F, 3.776F, 1.723F)
          lineToRelative(0.345F, -0.344F)
          curveTo(27.684F, 14.816F, 28.0F, 14.053F, 28.0F, 13.257F)
          verticalLineTo(6.5F)
          curveTo(28.0F, 5.12F, 26.88F, 4.0F, 25.5F, 4.0F)
          horizontalLineToRelative(-6.816F)
          close()        
      }
    }
    return _tagLockAccent32!!
  }

private var _tagLockAccent32: ImageVector? = null
