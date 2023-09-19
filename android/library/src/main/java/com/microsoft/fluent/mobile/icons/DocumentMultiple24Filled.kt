package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DocumentMultiple24: ImageVector
  get() {
    if (_documentMultiple24 != null) {
      return _documentMultiple24!!
    }
    _documentMultiple24 = fluentIcon(name = "Filled.DocumentMultiple24", 24f) {
      materialPath {
          moveTo(4.0F, 4.25F)
          curveTo(4.0F, 3.007F, 5.007F, 2.0F, 6.25F, 2.0F)
          horizontalLineToRelative(4.254F)
          verticalLineToRelative(4.747F)
          curveToRelative(0.0F, 1.243F, 1.007F, 2.25F, 2.25F, 2.25F)
          horizontalLineTo(17.5F)
          verticalLineToRelative(8.253F)
          curveToRelative(0.0F, 1.243F, -1.007F, 2.25F, -2.25F, 2.25F)
          horizontalLineToRelative(-9.0F)
          curveTo(5.007F, 19.5F, 4.0F, 18.493F, 4.0F, 17.25F)
          verticalLineToRelative(-13.0F)
          close()
          moveTo(12.004F, 6.747F)
          verticalLineToRelative(-4.28F)
          curveToRelative(0.076F, 0.06F, 0.15F, 0.123F, 0.218F, 0.192F)
          lineToRelative(4.619F, 4.619F)
          curveToRelative(0.07F, 0.07F, 0.134F, 0.143F, 0.193F, 0.22F)
          horizontalLineToRelative(-4.28F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          close()
          moveTo(8.75F, 22.0F)
          curveToRelative(-0.979F, 0.0F, -1.812F, -0.626F, -2.121F, -1.5F)
          horizontalLineToRelative(8.622F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineTo(8.937F)
          lineToRelative(0.84F, 0.84F)
          curveToRelative(0.423F, 0.423F, 0.66F, 0.995F, 0.66F, 1.592F)
          verticalLineToRelative(5.881F)
          curveToRelative(0.0F, 2.623F, -2.127F, 4.75F, -4.75F, 4.75F)
          horizontalLineToRelative(-6.5F)
          close()        
      }
    }
    return _documentMultiple24!!
  }

private var _documentMultiple24: ImageVector? = null
