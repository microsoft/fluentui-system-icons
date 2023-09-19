package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowUpload24: ImageVector
  get() {
    if (_arrowUpload24 != null) {
      return _arrowUpload24!!
    }
    _arrowUpload24 = fluentIcon(name = "Regular.ArrowUpload24", 24f) {
      materialPath {
          moveTo(18.25F, 3.51F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          lineToRelative(-13.0F, -0.004F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.335F, -0.75F, 0.75F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          lineToRelative(13.0F, 0.004F)
          close()
          moveToRelative(-6.602F, 18.488F)
          lineToRelative(0.102F, 0.007F)
          curveToRelative(0.38F, 0.0F, 0.694F, -0.282F, 0.743F, -0.649F)
          lineToRelative(0.007F, -0.101F)
          lineTo(12.499F, 7.57F)
          lineToRelative(3.722F, 3.72F)
          curveToRelative(0.266F, 0.266F, 0.683F, 0.29F, 0.976F, 0.073F)
          lineToRelative(0.085F, -0.073F)
          curveToRelative(0.266F, -0.266F, 0.29F, -0.683F, 0.072F, -0.977F)
          lineToRelative(-0.073F, -0.084F)
          lineToRelative(-4.997F, -4.996F)
          curveToRelative(-0.266F, -0.266F, -0.683F, -0.29F, -0.976F, -0.073F)
          lineToRelative(-0.085F, 0.072F)
          lineTo(6.22F, 10.23F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.768F, 0.0F, 1.06F)
          curveToRelative(0.265F, 0.267F, 0.682F, 0.292F, 0.976F, 0.074F)
          lineTo(7.28F, 11.29F)
          lineToRelative(3.719F, -3.713F)
          lineTo(11.0F, 21.255F)
          curveToRelative(0.0F, 0.38F, 0.282F, 0.693F, 0.648F, 0.743F)
          close()        
      }
    }
    return _arrowUpload24!!
  }

private var _arrowUpload24: ImageVector? = null
