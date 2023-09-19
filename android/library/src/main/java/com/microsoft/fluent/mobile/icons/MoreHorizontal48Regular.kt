package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.MoreHorizontal48: ImageVector
  get() {
    if (_moreHorizontal48 != null) {
      return _moreHorizontal48!!
    }
    _moreHorizontal48 = fluentIcon(name = "Regular.MoreHorizontal48", 48f) {
      materialPath {
          moveTo(15.752F, 24.0F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          reflectiveCurveToRelative(-3.25F, -1.455F, -3.25F, -3.25F)
          reflectiveCurveToRelative(1.455F, -3.25F, 3.25F, -3.25F)
          reflectiveCurveToRelative(3.25F, 1.455F, 3.25F, 3.25F)
          close()
          moveToRelative(11.5F, 0.0F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          reflectiveCurveToRelative(-3.25F, -1.455F, -3.25F, -3.25F)
          reflectiveCurveToRelative(1.455F, -3.25F, 3.25F, -3.25F)
          reflectiveCurveToRelative(3.25F, 1.455F, 3.25F, 3.25F)
          close()
          moveToRelative(8.25F, 3.25F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          reflectiveCurveToRelative(-1.455F, -3.25F, -3.25F, -3.25F)
          reflectiveCurveToRelative(-3.25F, 1.455F, -3.25F, 3.25F)
          reflectiveCurveToRelative(1.455F, 3.25F, 3.25F, 3.25F)
          close()        
      }
    }
    return _moreHorizontal48!!
  }

private var _moreHorizontal48: ImageVector? = null
