package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.MoreVertical48: ImageVector
  get() {
    if (_moreVertical48 != null) {
      return _moreVertical48!!
    }
    _moreVertical48 = fluentIcon(name = "Regular.MoreVertical48", 48f) {
      materialPath {
          moveTo(24.002F, 15.75F)
          curveToRelative(-1.795F, 0.0F, -3.25F, -1.455F, -3.25F, -3.25F)
          reflectiveCurveToRelative(1.455F, -3.25F, 3.25F, -3.25F)
          reflectiveCurveToRelative(3.25F, 1.455F, 3.25F, 3.25F)
          reflectiveCurveToRelative(-1.455F, 3.25F, -3.25F, 3.25F)
          close()
          moveToRelative(0.0F, 11.5F)
          curveToRelative(-1.795F, 0.0F, -3.25F, -1.455F, -3.25F, -3.25F)
          reflectiveCurveToRelative(1.455F, -3.25F, 3.25F, -3.25F)
          reflectiveCurveToRelative(3.25F, 1.455F, 3.25F, 3.25F)
          reflectiveCurveToRelative(-1.455F, 3.25F, -3.25F, 3.25F)
          close()
          moveToRelative(-3.25F, 8.25F)
          curveToRelative(0.0F, 1.795F, 1.455F, 3.25F, 3.25F, 3.25F)
          reflectiveCurveToRelative(3.25F, -1.455F, 3.25F, -3.25F)
          reflectiveCurveToRelative(-1.455F, -3.25F, -3.25F, -3.25F)
          reflectiveCurveToRelative(-3.25F, 1.455F, -3.25F, 3.25F)
          close()        
      }
    }
    return _moreVertical48!!
  }

private var _moreVertical48: ImageVector? = null
