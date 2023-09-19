package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.FStop24: ImageVector
  get() {
    if (_fStop24 != null) {
      return _fStop24!!
    }
    _fStop24 = fluentIcon(name = "Regular.FStop24", 24f) {
      materialPath {
          moveTo(13.195F, 6.528F)
          curveToRelative(0.338F, -1.98F, 2.371F, -3.182F, 4.268F, -2.524F)
          lineToRelative(0.592F, 0.205F)
          curveToRelative(0.39F, 0.135F, 0.818F, -0.072F, 0.954F, -0.463F)
          curveToRelative(0.135F, -0.392F, -0.072F, -0.819F, -0.463F, -0.955F)
          lineToRelative(-0.592F, -0.205F)
          curveToRelative(-2.772F, -0.96F, -5.744F, 0.797F, -6.237F, 3.69F)
          lineTo(10.995F, 10.5F)
          horizontalLineTo(6.75F)
          curveTo(6.336F, 10.5F, 6.0F, 10.836F, 6.0F, 11.25F)
          reflectiveCurveTo(6.336F, 12.0F, 6.75F, 12.0F)
          horizontalLineToRelative(3.99F)
          lineToRelative(-0.783F, 4.584F)
          curveToRelative(-0.376F, 2.202F, -2.812F, 3.377F, -4.77F, 2.3F)
          lineToRelative(-0.075F, -0.041F)
          curveToRelative(-0.363F, -0.2F, -0.82F, -0.067F, -1.019F, 0.296F)
          curveToRelative(-0.2F, 0.363F, -0.067F, 0.819F, 0.296F, 1.018F)
          lineTo(4.464F, 20.2F)
          curveToRelative(2.862F, 1.574F, 6.422F, -0.144F, 6.971F, -3.363F)
          lineTo(12.261F, 12.0F)
          horizontalLineToRelative(3.99F)
          curveToRelative(0.413F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.337F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-3.734F)
          lineToRelative(0.678F, -3.972F)
          close()        
      }
    }
    return _fStop24!!
  }

private var _fStop24: ImageVector? = null
