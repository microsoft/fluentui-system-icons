package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowDownload24: ImageVector
  get() {
    if (_arrowDownload24 != null) {
      return _arrowDownload24!!
    }
    _arrowDownload24 = fluentIcon(name = "Filled.ArrowDownload24", 24f) {
      materialPath {
          moveTo(5.25F, 20.5F)
          horizontalLineToRelative(13.498F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          curveToRelative(0.0F, 0.38F, -0.283F, 0.694F, -0.649F, 0.744F)
          lineTo(18.748F, 22.0F)
          horizontalLineTo(5.25F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.335F, -0.75F, -0.75F)
          curveToRelative(0.0F, -0.38F, 0.282F, -0.693F, 0.648F, -0.743F)
          lineTo(5.25F, 20.5F)
          horizontalLineToRelative(13.498F)
          horizontalLineTo(5.25F)
          close()
          moveToRelative(6.633F, -18.497F)
          lineTo(12.0F, 1.996F)
          curveToRelative(0.513F, 0.0F, 0.935F, 0.386F, 0.993F, 0.884F)
          lineTo(13.0F, 2.996F)
          verticalLineToRelative(12.59F)
          lineToRelative(3.294F, -3.293F)
          curveToRelative(0.36F, -0.36F, 0.928F, -0.388F, 1.32F, -0.083F)
          lineToRelative(0.094F, 0.083F)
          curveToRelative(0.36F, 0.361F, 0.388F, 0.928F, 0.083F, 1.32F)
          lineToRelative(-0.083F, 0.095F)
          lineToRelative(-4.997F, 4.996F)
          curveToRelative(-0.36F, 0.36F, -0.928F, 0.388F, -1.32F, 0.084F)
          lineToRelative(-0.094F, -0.083F)
          lineToRelative(-5.004F, -4.997F)
          curveToRelative(-0.39F, -0.39F, -0.39F, -1.023F, 0.0F, -1.414F)
          curveToRelative(0.36F, -0.36F, 0.927F, -0.389F, 1.32F, -0.084F)
          lineToRelative(0.094F, 0.083F)
          lineTo(11.0F, 15.58F)
          verticalLineTo(2.996F)
          curveToRelative(0.0F, -0.513F, 0.386F, -0.935F, 0.883F, -0.993F)
          lineTo(12.0F, 1.996F)
          lineToRelative(-0.117F, 0.007F)
          close()        
      }
    }
    return _arrowDownload24!!
  }

private var _arrowDownload24: ImageVector? = null
