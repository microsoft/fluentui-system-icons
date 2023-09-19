package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FlipVertical32: ImageVector
  get() {
    if (_flipVertical32 != null) {
      return _flipVertical32!!
    }
    _flipVertical32 = fluentIcon(name = "Filled.FlipVertical32", 32f) {
      materialPath {
          moveTo(27.43F, 2.201F)
          curveTo(27.786F, 2.431F, 28.0F, 2.826F, 28.0F, 3.25F)
          verticalLineToRelative(10.5F)
          curveToRelative(0.0F, 0.69F, -0.56F, 1.25F, -1.25F, 1.25F)
          horizontalLineTo(3.25F)
          curveToRelative(-0.59F, 0.0F, -1.1F, -0.412F, -1.222F, -0.99F)
          curveToRelative(-0.123F, -0.576F, 0.174F, -1.16F, 0.712F, -1.401F)
          lineToRelative(23.5F, -10.5F)
          curveToRelative(0.387F, -0.173F, 0.835F, -0.138F, 1.19F, 0.092F)
          close()
          moveTo(9.112F, 12.5F)
          horizontalLineTo(25.5F)
          verticalLineTo(5.178F)
          lineTo(9.112F, 12.5F)
          close()
          moveTo(28.0F, 29.0F)
          curveToRelative(0.0F, 0.34F, -0.173F, 0.658F, -0.46F, 0.842F)
          curveToRelative(-0.286F, 0.184F, -0.647F, 0.209F, -0.956F, 0.067F)
          lineToRelative(-24.0F, -11.0F)
          curveToRelative(-0.428F, -0.196F, -0.66F, -0.663F, -0.56F, -1.122F)
          curveTo(2.123F, 17.327F, 2.53F, 17.0F, 3.0F, 17.0F)
          horizontalLineToRelative(24.0F)
          curveToRelative(0.553F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(11.0F)
          close()        
      }
    }
    return _flipVertical32!!
  }

private var _flipVertical32: ImageVector? = null
