package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PaintBucket24: ImageVector
  get() {
    if (_paintBucket24 != null) {
      return _paintBucket24!!
    }
    _paintBucket24 = fluentIcon(name = "Filled.PaintBucket24", 24f) {
      materialPath {
          moveTo(12.0F, 2.25F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          reflectiveCurveTo(10.5F, 1.836F, 10.5F, 2.25F)
          verticalLineTo(3.5F)
          curveToRelative(-0.307F, 0.108F, -0.595F, 0.285F, -0.841F, 0.53F)
          lineTo(2.78F, 10.91F)
          curveToRelative(-0.878F, 0.879F, -0.878F, 2.303F, 0.0F, 3.182F)
          lineToRelative(4.88F, 4.878F)
          curveToRelative(0.879F, 0.878F, 2.303F, 0.878F, 3.182F, 0.0F)
          lineToRelative(6.879F, -6.879F)
          curveToRelative(0.878F, -0.879F, 0.878F, -2.303F, 0.0F, -3.182F)
          lineTo(12.84F, 4.03F)
          curveTo(12.595F, 3.785F, 12.307F, 3.608F, 12.0F, 3.5F)
          verticalLineTo(2.25F)
          close()
          moveToRelative(-1.5F, 3.06F)
          verticalLineToRelative(1.44F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveTo(12.0F, 7.164F, 12.0F, 6.75F)
          verticalLineTo(5.31F)
          lineToRelative(4.659F, 4.66F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.768F, 0.0F, 1.06F)
          lineTo(15.689F, 12.0F)
          horizontalLineTo(3.812F)
          lineToRelative(0.029F, -0.03F)
          lineTo(10.5F, 5.31F)
          close()
          moveToRelative(9.021F, 8.292F)
          curveToRelative(-0.329F, -0.617F, -1.213F, -0.617F, -1.542F, 0.0F)
          lineToRelative(-2.008F, 3.766F)
          curveTo(14.85F, 19.466F, 16.372F, 22.0F, 18.75F, 22.0F)
          reflectiveCurveToRelative(3.898F, -2.534F, 2.78F, -4.632F)
          lineToRelative(-2.009F, -3.766F)
          close()        
      }
    }
    return _paintBucket24!!
  }

private var _paintBucket24: ImageVector? = null
