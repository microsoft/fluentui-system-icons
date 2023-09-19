package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowUpload24: ImageVector
  get() {
    if (_arrowUpload24 != null) {
      return _arrowUpload24!!
    }
    _arrowUpload24 = fluentIcon(name = "Filled.ArrowUpload24", 24f) {
      materialPath {
          moveTo(5.25F, 3.496F)
          horizontalLineToRelative(13.498F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          curveToRelative(0.0F, -0.38F, -0.283F, -0.693F, -0.649F, -0.743F)
          lineToRelative(-0.101F, -0.007F)
          horizontalLineTo(5.25F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          curveToRelative(0.0F, 0.38F, 0.282F, 0.694F, 0.648F, 0.743F)
          lineTo(5.25F, 3.496F)
          close()
          moveToRelative(6.633F, 18.498F)
          lineTo(12.0F, 22.0F)
          curveToRelative(0.513F, 0.0F, 0.935F, -0.386F, 0.993F, -0.883F)
          lineTo(13.0F, 21.0F)
          verticalLineTo(8.41F)
          lineToRelative(3.294F, 3.293F)
          curveToRelative(0.36F, 0.36F, 0.928F, 0.388F, 1.32F, 0.083F)
          lineToRelative(0.094F, -0.083F)
          curveToRelative(0.36F, -0.36F, 0.388F, -0.928F, 0.083F, -1.32F)
          lineToRelative(-0.083F, -0.094F)
          lineToRelative(-4.997F, -4.997F)
          curveToRelative(-0.36F, -0.36F, -0.928F, -0.388F, -1.32F, -0.083F)
          lineToRelative(-0.094F, 0.083F)
          lineToRelative(-5.004F, 4.997F)
          curveToRelative(-0.39F, 0.39F, -0.39F, 1.023F, 0.0F, 1.414F)
          curveToRelative(0.36F, 0.36F, 0.927F, 0.389F, 1.32F, 0.084F)
          lineToRelative(0.094F, -0.083F)
          lineTo(11.0F, 8.415F)
          verticalLineTo(21.0F)
          curveToRelative(0.0F, 0.513F, 0.386F, 0.936F, 0.883F, 0.994F)
          close()        
      }
    }
    return _arrowUpload24!!
  }

private var _arrowUpload24: ImageVector? = null
